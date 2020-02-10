import { ActionsType } from '../../../../services/actions/types';
import { convertActionsToMenuFormat } from '../functions';

describe('convertActionsToMenuFormat' , () => {
  test('if `actions` falsey, return blank array', () => {

    const actions: ActionsType[] = null;
    const result = convertActionsToMenuFormat(actions);
    expect(result).toEqual([]);
  });

  test('if `actions` has valid types, return array of menu items', () => {

    const actions: ActionsType[] = [{
      title:'title',
      type: 'action',
      icon: 'test'
    }];
    const result = convertActionsToMenuFormat(actions);
    expect(result).toEqual([{
      name:'title',
      icon:'test'
    }]);
  });
});