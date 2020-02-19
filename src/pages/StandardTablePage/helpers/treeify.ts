import {
  KeyValue
} from '../../../types';
import assignIn from 'lodash/assignIn';

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
      if (obj[parent] != null) {
          lookup[obj[parent]['id']][children].push(obj);
      } else {
        const agent_groups = obj.agent_groups && obj.agent_groups.map((item: any) => item.title);
        const agent_teams = obj.agent_teams && obj.agent_teams.map((item: any) => item.title);
        const departments = obj.departments && obj.departments.map((item: any) => item.title);

        treeList.push(assignIn(obj, {
          agent_groups: agent_groups.length ? [agent_groups.join(', ')] : agent_groups,
          agent_teams: agent_teams.length ? [agent_teams.join(', ')] : agent_teams,
          departments: departments.length ? [departments.join(', ')] : departments,
        }));
      }
  });
  return treeList;
};
