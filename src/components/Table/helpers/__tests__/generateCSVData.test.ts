import {generateCSVData} from '../functions';

describe('generateCSVData', () => {
  xtest('generates data to csv format', () => {
    const table = [{
      values: {
        name:'John',
        email:'john@test.com',
        emails:['john@test.com', 'another@test.com'],
        agents:[
          {id: '3', sys_name: 'agent_all_perms', title: 'All Permissions', note: 'Agent has full permissions', __typename: 'AgentGroup'},
          {id: '4', sys_name: 'agent_some_perms', title: 'Some Permissions', note: 'Agent has some permissions', __typename: 'AgentGroup'}
        ]
      },
    },{
      values: {
        name:'Jane',
        email:'jane@test.com',
        emails:['jane@test.com', 'another@test.com'],
        agents:[
          {id: '3', sys_name: 'agent_all_perms', title: 'All Permissions', note: 'Agent has full permissions', __typename: 'AgentGroup'},
          {id: '4', sys_name: 'agent_some_perms', title: 'Some Permissions', note: 'Agent has some permissions', __typename: 'AgentGroup'}
        ]
      }
    }];
    const columnsMeta = [{
      id:'name',
      title:'Name',
    },{
      id:'email',
      title:'Email',
    },{
      id:'emails',
      title:'All Emails'
    },{
      id:'agents',
      title:'Agents'
    }];

    const csvData = generateCSVData(table, columnsMeta);

    expect(csvData).toEqual([ {
      name: 'John',
      email: 'john@test.com',
      emails:['john@test.com', 'test@test.com'],
      agents:['All Permissions', 'Some Permissions']
    }, {
      name: 'Jane',
      email: 'jane@test.com',
      emails:['john@test.com', 'test@test.com'],
      agents:['All Permissions', 'Some Permissions']
    }]);
  });
});