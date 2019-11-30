import {
  DELETE_AGENTS,
  ADD_TEAM,
  REMOVE_TEAM,
  REMOVE_ALL_ADD_TEAM
} from '../../../schema/mutations/Agents';

import { ActionsType } from '../types';

const agents: ActionsType[] = [
  {
    icon:'trash',
    title:'action.agents.delete_action',
    schema:DELETE_AGENTS,
    type:'action',
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
        type:'action',
        actions: null
      },
      {
        title:'action.agents.remove_team',
        schema:REMOVE_TEAM,
        type:'action',
        actions: null
      },
      {
        title:'action.agents.remove_all_add_team',
        schema:REMOVE_ALL_ADD_TEAM,
        type:'action',
        actions: null
      }
    ]
  }
];

export default agents;