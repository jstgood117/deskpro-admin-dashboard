import { Column } from 'react-table';
export const testTableColumns: Column[] = [
  { id: 'selection', width: 20 },
  { Header: 'Name', accessor: 'name' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Phone', accessor: 'phone' },
  { Header: 'Access', accessor: 'access' },
  { Header: 'Team', accessor: 'team' },
  { Header: 'Permission Group', accessor: 'permission_group' }
];
