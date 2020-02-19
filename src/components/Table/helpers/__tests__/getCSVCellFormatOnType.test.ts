import {
  getValueFromColumnType
} from '../../../../utils/getValueFromColumnType';

import { KeyValue } from '../../../../types';

describe('getValueFromColumnType', () => {

  const values: KeyValue = {
    id: '1',
    name: 'John Doe',
    alias: 'John Doe',
    first_name: 'John',
    last_name: 'Doe',
    avatarUrn: 'http://test.com/img.png',
    primary_email: 'testing@deskpro.com',
    emails: ['testing@deskpro.com', 'john@deskpro.com'],
    salary:1_000_000,
    can_admin: true,
    can_reports: false,
    date_last_login: '2020-01-22 05:27:14',
    agent_teams: ['Team 1','Team 2'],
    agent_groups: ['Group 1','Group 2'],
    departments:['Department 1','Department 2'],
    timezone: 'Asia/Kolkata',
    date_created: '2020-01-22 01:29:43',
    tickets: 154,
  };

  describe('covers `value` based columnProps', () => {

    const columnProps: KeyValue = {
      __typename: 'TableColumnId',
      value: {
        dataPath: 'id',
        staticJson: null,
        staticValue: null,
        __typename: 'TablePayloadValue',
      }
    };

    test('TableColumnId', () => {
      const result = getValueFromColumnType(columnProps, values);
      expect(result).toEqual('1');
    });

    test('TableColumnTimeAgo', () => {

      const timeAgoProps = {
        ...columnProps,
        __typename: 'TableColumnTimeAgo',
        value: {
          ...columnProps.values,
          dataPath: 'date_created',
        }
      };

      const result = getValueFromColumnType(timeAgoProps, values);
      expect(result).toEqual('2020-01-22 01:29:43');
    });

    test('TableColumnText', () => {
      const emailProps = {
        ...columnProps,
        __typename: 'TableColumnText',
        value: {
          ...columnProps.values,
          dataPath: 'primary_email',
        }
      };

      const result = getValueFromColumnType(emailProps, values);
      expect(result).toEqual('testing@deskpro.com');
    });

    test('TableColumnInteger', () => {
      const salaryProps = {
        ...columnProps,
        __typename: 'TableColumnInteger',
        value: {
          ...columnProps.values,
          dataPath: 'salary',
        }
      };

      const result = getValueFromColumnType(salaryProps, values);
      expect(result).toEqual(1_000_000);
    });

  });

  describe('covers `valuesArray` based columnProps', () => {
    const valuesArrayProps: KeyValue = {
      __typename: 'TableColumnTextCommaSep',
      valuesArray: {
        dataPath: 'emails',
        staticJson: null,
        staticValue: null,
        __typename: 'TablePayloadValue',
      }
    };

    test('TableColumnTextCommaSep', () => {
      const result = getValueFromColumnType(valuesArrayProps, values);
      expect(result).toEqual('testing@deskpro.com, john@deskpro.com');
    });

    test('TableColumnTicketDepartmentList', () => {
      const departmentsProps = {
        ...valuesArrayProps,
        __typename: 'TableColumnTicketDepartmentList',
        valuesArray: {
          ...valuesArrayProps.valuesArray,
          dataPath: 'departments',
        }
      };

      const result = getValueFromColumnType(departmentsProps, values);
      expect(result).toEqual('Department 1, Department 2');
    });

    test('TableColumnAgentGroupList', () => {
      const groupsListProps = {
        ...valuesArrayProps,
        __typename: 'TableColumnAgentGroupList',
        valuesArray: {
          ...valuesArrayProps.valuesArray,
          dataPath: 'agent_groups',
        }
      };

      const result = getValueFromColumnType(groupsListProps, values);
      expect(result).toEqual('Group 1, Group 2');
    });

    test('TableColumnAgentTeamList', () => {
      const teamsListProps = {
        ...valuesArrayProps,
        __typename: 'TableColumnAgentTeamList',
        valuesArray: {
          ...valuesArrayProps.valuesArray,
          dataPath: 'agent_teams',
        }
      };

      const result = getValueFromColumnType(teamsListProps, values);
      expect(result).toEqual('Team 1, Team 2');
    });

  });

  describe('covers `object` based columnProps', () => {
    const boolanProps: KeyValue = {
      __typename: 'TableColumnBoolYesNo',
      value: {
        dataPath: 'can_admin',
        staticJson: null,
        staticValue: null,
        __typename: 'TablePayloadValue',
      }
    };

    test('TableColumnBoolYesNo truey', () => {
      const result = getValueFromColumnType(boolanProps, values);
      expect(result).toEqual('Yes');
    });

    test('TableColumnBoolYesNo falsey', () => {

      const falseBoolanProps = {
        ...boolanProps,
        value: {
          ...boolanProps.value,
          dataPath: 'can_reports'
        }
      };

      const result = getValueFromColumnType(falseBoolanProps, values);
      expect(result).toEqual('No');
    });

    test('TableColumnBoolYesNo path doesn`t exist', () => {

      const failBoolanProps = {
        ...boolanProps,
        value: {
          ...boolanProps.value,
          dataPath: 'does_not_exist'
        }
      };

      const result = getValueFromColumnType(failBoolanProps, values);
      expect(result).toEqual('');
    });
  });

  describe('covers avatar edge case', () => {

    test('TableColumnNameAvatar', () => {
      const avatarProps: KeyValue = {
        __typename: 'TableColumnNameAvatar',
        name: {
          dataPath: 'name',
          staticJson: null,
          staticValue: null,
          __typename: 'TablePayloadValue',
        },
        avatar: {
          dataPath: 'avatarUrn',
          staticJson: null,
          staticValue: null,
          __typename: 'TablePayloadValue',
        }
      };

      const result = getValueFromColumnType(avatarProps, values);
      expect(result).toEqual('John Doe');
    });

  });

});