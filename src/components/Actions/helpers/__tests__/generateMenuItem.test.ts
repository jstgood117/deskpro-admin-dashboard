import { generateMenuItem } from '../functions';

describe('generateMenuItem', () => {
  test('receives type `action` returns correct structure', () => {
    const action = {
      type: 'action',
      title: 'title',
      icon: 'icon'
    };

    const result = generateMenuItem(action);
    expect(result).toEqual({
      name: 'title',
      icon: 'icon'
    });
  });

  test('receives type `action` with no icon, returns no icon in return result', () => {
    const action = {
      type: 'action',
      title: 'title'
    };

    const result = generateMenuItem(action);
    expect(result).toEqual({
      name: 'title'
    });
  });

  test('receives type `seperator` returns empty object', () => {
    const action = {
      type: 'separator'
    };

    const result = generateMenuItem(action);
    expect(result).toEqual({});
  });

  test('receives type `foolder` returns correct structure with sub actions', () => {
    const action = {
      icon:'user.check',
      title:'action.agents.change_team',
      type:'folder',
      actions: [
        {
          title:'action.agents.add_team',
          type:'action',
        },
        {
          title:'action.agents.remove_team',
          type:'mutate'
        },
      ]
    };

    const result = generateMenuItem(action);
    expect(result).toEqual({
      'icon': 'user.check',
      'name': 'action.agents.change_team',
      'subItems':[{
        'name': 'action.agents.add_team',
      },{
        'name': 'action.agents.remove_team',
      }],
    });
  });

});
