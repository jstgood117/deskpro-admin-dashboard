import React from 'react';
import styled from 'styled-components';

export const TableStyled = styled.div`
	& table {
		width: 100%;
		border-collapse: collapse;

		& thead {
			& tr {
				border-top: 1px solid ${props => props.theme.greyLight};
				border-bottom: 1px solid ${props => props.theme.greyLight};

				& th {
					padding: 0;
					line-height: 26px;
					color: ${props => props.theme.greyDark};
					text-align: left;
				}
			}
		}
		& tbody {
			& tr {

				&.row--selected {
					background-color: ${props => props.theme.greyLight};
				}

				border-bottom: 1px solid ${props => props.theme.greyLighter};

				& td {
					padding: 0;
					text-align: left;
					line-height: 44px;
					color: ${props => props.theme.staticColour};

					& img {
						width: 25px;
						height: 25px;
						border-radius: 12px;
						vertical-align: middle;
						margin-right: 15px;
					}
				}
			}
		}
	}
`

// TODO how does this come through in the agents_getAgentsPage query?

/* const formattedNameAvatar = (props: any) => {
	const checkArr = Object.keys(props);
	if (!checkArr.includes('avatar') || !checkArr.includes('name')) {
		throw new Error(`formattedNameAvatar did not receive required props: ${JSON.stringify(props)}`);
	}
	return (rowData: any) => <div><img src={rowData[props.avatar]} alt={rowData[props.name]} />{rowData[props.name]}</div>;
}
const sortNameAvatar = (a: any, b: any) => a.name - b.name; */

export const transformColumnData = (columns, intl) => {
	let newCols = columns.map( column => {	
    let newCol = {
			id: column.title,
			Header: intl.formatMessage({ id: `admin_common.${column.title}` }),
			accessor: column.data[0].path,
			type: column.field
    }
		switch (column.title) {
			case 'selection':
				newCol.Header = ({ getToggleAllRowsSelectedProps }) => (
					<div>
						<input type='checkbox' {...getToggleAllRowsSelectedProps()} />
					</div>
				);
				newCol.Cell = ({ row }) => (
					<div>
						<input type='checkbox' {...row.getToggleRowSelectedProps()} />
					</div>
				);
				break;
	/*			case 'formattedNameAvatar':
				column.render = formattedNameAvatar(column.props);
				column.customSort = sortNameAvatar; */
				default:
    }
		return newCol;
	});

	return newCols;
}
