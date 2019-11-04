import { Column } from 'react-table';
export const testTableColumns: Column[] = [
  { id: 'selection', width: 20 },
  /*	{ title: 'Name',
		field: 'formattedNameAvatar',
		props: {
			name: 'name',
			avatar: 'url',
		},
		sorting: true,
	}, */
  { Header: 'Name', accessor: 'name' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Phone', accessor: 'phone' },
  { Header: 'Access', accessor: 'access' },
  { Header: 'Team', accessor: 'team' },
  { Header: 'Permission Group', accessor: 'permission_group' }
];
