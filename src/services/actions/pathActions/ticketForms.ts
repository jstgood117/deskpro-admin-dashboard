import {
  DELETE_AGENTS,
  ADD_TEAM,
  REMOVE_TEAM,
  REMOVE_ALL_TEAMS
} from '../../../schema/mutations/Agents';
import { GET_TEAMS } from '../../../schema/queries/Agents';

import { ActionsType } from '../types';

const agents: ActionsType[] = [
  {
    icon: 'trash',
    title: 'action.agents.delete_action',
    preAction: {
      type: 'CONFIRM_MODAL',
      icon: 'trash',
      title: 'Delete agent?',
      message: `Deleting %s agents will change their status to 'deleted'`,
      variant: 'danger',
      leftButtonText: 'Delete Agents',
      rightButtonText: 'Keep Agents',
    },
    schema: DELETE_AGENTS,
    type: 'mutate',
    actions: null
  },
  {
    type: 'separator'
  },
  {
    icon: 'user.check',
    title: 'action.agents.change_team',
    type: 'folder',
    actions: [
      {
        title: 'action.agents.add_team',
        schema: ADD_TEAM,
        type: 'mutate',
        actions: null,
        selectOptions: GET_TEAMS,
        preAction: {
          type: 'CONFIRM_MODAL',
          icon: 'add',
          title: 'Add Teams?',
          message: `Added teams to %s agents.`,
          variant: 'default',
          leftButtonText: 'Add Teams',
          rightButtonText: 'Cancel',
        },
      },
      {
        title: 'action.agents.remove_team',
        schema: REMOVE_TEAM,
        type: 'mutate',
        actions: null
      },
      {
        title: 'action.agents.remove_all_teams',
        schema: REMOVE_ALL_TEAMS,
        type: 'mutate',
        actions: null
      }
    ]
  },
  {
    type: 'separator'
  },
  {
    icon: 'check',
    title: 'No side effect action',
    type: 'action',
    action: (args: any) => {
      console.log('test');
      console.log(args);
    }
  },
];

export default agents;
