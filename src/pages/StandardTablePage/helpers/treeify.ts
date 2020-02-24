import {
  KeyValue
} from '../../../types';

export const treeify = (
  list: KeyValue[],
  id?: string,
  parent?: string,
  children?: string
) => {
  if (!id) id = 'id';
  if (!parent) parent = 'parent';
  if (!children) children = 'subRows';

  const treeList: any[] = [];
  const lookup: KeyValue = {};
  list.forEach((obj: any) => {
    lookup[obj[id]] = obj;
    obj[children] = [];
  });

  list.forEach((obj: KeyValue) => {
    if (obj[parent]) {
      lookup[obj[parent]['id']][children].push(obj);
    } else {
      treeList.push(obj);
    }
  });
  return treeList;
};
