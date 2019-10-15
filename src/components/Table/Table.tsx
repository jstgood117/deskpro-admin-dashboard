import React, { forwardRef, LegacyRef, SFC, Fragment } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import MaterialTable from 'material-table';
import { ChevronLeft, ChevronRight, FirstPage, LastPage } from '@material-ui/icons';

import { testTableColumns } from '../../resources/constants';

const tableIcons = {
	FirstPage: forwardRef((props, ref: LegacyRef<SVGSVGElement>) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref: LegacyRef<SVGSVGElement>) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref: LegacyRef<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref: LegacyRef<SVGSVGElement>) => <ChevronLeft {...props} ref={ref} />),
};

const TableStyled = styled.div`
	& .MuiToolbar-regular {
		min-height: 0;
	}
	& .MuiPaper-elevation2 {
		box-shadow: none;
	}
	& .MuiSvgIcon-root {
		fill: ${props => props.theme.greyLight};
	}

	& table {
		& thead {
			& tr {
				border-top: 1px solid ${props => props.theme.greyLight};
				border-bottom: 1px solid ${props => props.theme.greyLight};

				& th {
					padding: 0;
					line-height: 26px;
					color: ${props => props.theme.greyDark};
				}
			}
		}
		& tbody {
			& tr {
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

//, render: (rowData: any) => <div id={rowData.id}><img src={rowData.avatar} alt="ava" />{rowData.name}</div>

export interface IProps {
	dataQuery: string,
	metadataQuery: string,
}

const Table: SFC<IProps> = ({dataQuery, metadataQuery}) => {
//		const { loading: loadingCols, error: errorCols, data: dataCols } = useQuery(gql`${metadataQuery}`);
	const { loading: loadingRows, error: errorRows, data: dataRows } = useQuery(gql`${dataQuery}`);
//		if (dataCols) console.log(dataCols)

	// test data for now
	const loadingCols = false;
	const errorCols = false;
	const dataCols = testTableColumns;

	return (
		<Fragment>
			{(loadingCols || loadingRows) && <p>Loading...</p>}
			{(errorCols || errorRows) && <p>Error, couldn't load data</p>}
			{dataCols && dataRows && <TableStyled>
				<MaterialTable
					data={dataRows.agents_getAgents}
					columns={dataCols}
					options={{
						pageSize: 5,
						search: false,
						showTitle: false,
						selection: true,
					}}
					icons={tableIcons}
				/>
			</TableStyled>}
		</Fragment>
	);
}

export default Table;
