import {
  DELETE_AGENTS,
  UPDATE_AGENTS,
  ADD_TEAM,
  REMOVE_TEAM,
  REMOVE_ALL_ADD_TEAM
} from '../../../schema/mutations/Agents';

export default [
  {
    title:'action.table.delete_action',
    schema:DELETE_AGENTS,
    type:'action',
    actions: null
  },
  {
    title:'separator',
    schema:null,
    type:'action',
    actions: null
  },
  {
    title:'action.table.update_action',
    schema:UPDATE_AGENTS,
    type:'action',
    actions: null
  },
  {
    title:'action.table.change_team_folder',
    schema:null,
    type:'folder',
    actions: [
      {
        title:'action.table.add_team',
        schema:ADD_TEAM,
        type:'action',
        actions: null
      },
      {
        title:'action.table.remove_team',
        schema:REMOVE_TEAM,
        type:'action',
        actions: null
      },
      {
        title:'action.table.remove_all_add_team',
        schema:REMOVE_ALL_ADD_TEAM,
        type:'action',
        actions: null
      }
    ]
  }
];