import setWith from 'lodash/setWith';
import get from 'lodash/get';
import merge from 'lodash/merge';
import {
  IRuleValue,
  IRuleItem,
  IRuleBuilderSchema,
  IRuleOptions,
  RuleOperatorType,
  FilterMeta,
  operatorDictionary
} from '../../resources/interfaces/filterMeta';

import { KeyValue } from  '../../types';

export const generateId = (): string =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

export const initGroup = (): IRuleValue => ({
  id: generateId(),
  type: 'group',
  operator: 'and',
  rules: [initRule()]
});

export const initRule = (): IRuleItem => ({
  id: generateId(),
  type: 'rule',
  rule: {
    propertyId: '',
    operator: '',
    value: ''
  }
});

export const addNewRuleItem = (
  newRule: IRuleValue | IRuleItem,
  rootValue: IRuleValue,
  currentValue: IRuleValue,
  index: number
) => {
  const value = { ...rootValue };

  if (value.id === currentValue.id) {
    // value.rules.push(newRule);
    value.rules.splice(index + 1, 0, newRule);
  } else {
    value.rules.forEach(function findRule(item) {
      if (item.id === currentValue.id) {
        // (item as IRuleValue).rules.push(newRule);
        (item as IRuleValue).rules.splice(index + 1, 0, newRule);
      } else if (item.type === 'group') {
        (item as IRuleValue).rules.forEach(findRule);
      }
    });
  }

  return value;
};

export const addNewGroup = (
  rootValue: IRuleValue,
  currentValue: IRuleValue,
  index: number
): IRuleValue => {
  return addNewRuleItem(initGroup(), rootValue, currentValue, index);
};

export const addNewRule = (
  rootValue: IRuleValue,
  currentValue: IRuleValue,
  index: number
): IRuleValue => {
  return addNewRuleItem(initRule(), rootValue, currentValue, index);
};

export const changeRuleValue = (
  rootValue: IRuleValue,
  currentValue: IRuleValue,
  key: string,
  value: any
): IRuleValue => {
  const rs = { ...rootValue };

  if (rs.id === currentValue.id) {
    setWith(rs, key, value);
  } else {
    rs.rules.forEach(function findRule(item) {
      if (item.id === currentValue.id) {
        setWith(item, key, value);
      } else if (item.type === 'group') {
        (item as IRuleValue).rules.forEach(findRule);
      }
    });
  }

  return rs;
};

export const moveRule = (
  rules: (IRuleValue | IRuleItem)[],
  oldIndex: number,
  newIndex: number
) => {
  while (oldIndex < 0) {
    oldIndex += rules.length;
  }
  while (newIndex < 0) {
    newIndex += rules.length;
  }
  if (newIndex >= rules.length) {
    let k = newIndex - rules.length + 1;
    while (k--) {
      rules.push(undefined);
    }
  }
  rules.splice(newIndex, 0, rules.splice(oldIndex, 1)[0]);
  return rules;
};

export const moveItem = (
  rootValue: IRuleValue,
  currentValue: IRuleValue,
  oldIndex: number,
  newIndex: number
) => {
  const rules = moveRule(currentValue.rules || [], oldIndex, newIndex);
  return changeRuleValue(rootValue, currentValue, 'rules', rules);
};

export const deleteRule = (
  rootValue: IRuleValue,
  currentValue: IRuleValue,
  index: number
) => {
  const rules = currentValue.rules || [];
  rules.splice(index, 1);

  return changeRuleValue(rootValue, currentValue, 'rules', rules);
};

export const deleteGroup = (
  rootValue: IRuleValue,
  parentValue: IRuleValue,
  currentValue: IRuleValue,
  index: number,
  option: string // DELETE_ALL | DELETE_GROUP_ONLY
) => {
  let rules = parentValue.rules || [];
  switch (option) {
    case 'DELETE_ALL':
      rules.splice(index, 1);
      break;
    case 'DELETE_GROUP_ONLY':
      const contents = currentValue.rules;
      rules.splice(index, 1);
      rules = rules.concat([...contents]);
      break;
    default:
      break;
  }

  return changeRuleValue(rootValue, parentValue, 'rules', rules);
};

export const findParentsValueById = (
  value: IRuleValue,
  childId: string
): IRuleValue => {
  const rules = get(value, 'rules', []);
  if (rules.some(item => item.id === childId)) {
    return value;
  }

  for (const rule of rules) {
    const rs = findParentsValueById(rule, childId);
    if (rs) {
      return rs;
    }
  }
  return null;
};

export const upLevelGroup = (
  rootValue: IRuleValue,
  parentValue: IRuleValue,
  currentValue: IRuleValue,
  index: number
) => {
  // Remove item
  parentValue.rules.splice(index, 1);
  // Find rule need update
  const ruleNeedUpdate = findParentsValueById(rootValue, parentValue.id);
  if (!ruleNeedUpdate || !ruleNeedUpdate.rules) {
    return;
  }
  ruleNeedUpdate.rules.push(currentValue);
  // Move next to parent
  const oldIndex = ruleNeedUpdate.rules.findIndex(
    item => item.id === parentValue.id
  );
  const rules = moveRule(
    ruleNeedUpdate.rules || [],
    ruleNeedUpdate.rules.length - 1,
    oldIndex + 1
  );

  return changeRuleValue(rootValue, ruleNeedUpdate, 'rules', rules);
};

export const updateRule = (
  rootValue: IRuleValue,
  currentValue: IRuleValue,
  value: IRuleItem,
  index: number
) => {
  const rules = currentValue.rules || [];
  rules[index] = value;

  return changeRuleValue(rootValue, currentValue, 'rules', rules);
};

export const convertRuleSchema = (
  groupTitle: string,
  input: FilterMeta[]
): IRuleBuilderSchema => {
  const schema: IRuleBuilderSchema = {
    groupTitle,
    properties: []
  };

  input.forEach(item => {
    const mapTypes: KeyValue = {
      BOOL: 'text',
      TEXT: 'text',
      CHOICE_FROM_DATA: 'select'
    };
    const type = mapTypes[item.type];
    const options: IRuleOptions = {} as IRuleOptions;
    if (type === 'select' && item.uniqueValues) {
      const choices = item.uniqueValues.reduce((obj, i) => {
        obj[i.id] = i.title;
        return obj;
      }, {});
      merge(options, { choices });
    }
    const getOperators = (items: string[]) => {
      const result: RuleOperatorType[] = [];
      items.map((val: string) => {
        result.push(operatorDictionary[val]);
        return true;
      });
      return result;
    };
    schema.properties.push({
      propertyId: item.title,
      title: item.title,
      operators: getOperators(item.operators),
      type,
      options
    });
  });

  return schema;
};
