import {
  DELETE_AGENTS,
  ADD_TEAM,
  REMOVE_TEAM,
  REMOVE_ALL_TEAMS
} from '../../../schema/mutations/Agents';

import { ActionsType } from '../types';

const agents: ActionsType[] = [
  {
    icon:'trash',
    title:'action.agents.delete_action',
    preAction: {
      type:'CONFIRM_MODAL',
      icon:'trash',
      title: 'Delete agent?',
      message:`Deleting %s agents will change their status to 'deleted'`,
      variant: 'danger',
      leftButtonText:'Delete Agents',
      rightButtonText: 'Keep Agents',
    },
    schema:DELETE_AGENTS,
    type:'mutate',
    actions: null
  },
  {
    type:'separator'
  },
  {
    icon:'user.check',
    title:'action.agents.change_team',
    type:'folder',
    actions: [
      {
        title:'action.agents.add_team',
        schema:ADD_TEAM,
        type:'mutate',
        actions: null
      },
      {
        title:'action.agents.remove_team',
        schema:REMOVE_TEAM,
        type:'mutate',
        actions: null
      },
      {
        title:'action.agents.remove_all_teams',
        schema:REMOVE_ALL_TEAMS,
        type:'mutate',
        actions: null
      }
    ]
  }
];

export default agents;