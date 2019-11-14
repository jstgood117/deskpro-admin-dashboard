import styled from 'styled-components';
import { customSortMethod } from './helpers/sortingFunctions';
import { dpstyle } from '../Styled';

export const TableStyled = styled(dpstyle.div)`
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

const generateSortType = sortType => {
	if(!sortType) {
		return 'alphanumeric';
	}

	// Todo, switch function for different sort types
	// ...for now, send back the custom sort type as a POC
	return customSortMethod;
}

export const transformColumnData = (columns, intl) => {
	let newCols = columns.map( column => {	
    let newCol = {
			id: column.title,
			Header: intl.formatMessage({ id: `admin_common.${column.title}` }),
			accessor: column.data[0].path,
			type: column.field, 
			sortType: generateSortType(column.sortType)
    }
		return newCol;
	});

	return newCols;
}
