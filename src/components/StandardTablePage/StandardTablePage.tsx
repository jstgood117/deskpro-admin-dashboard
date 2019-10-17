import React, { SFC } from 'react';
import { FormattedMessage } from 'react-intl';

import { ITableSetup } from '../../resources/interfaces';

import Main from '../Main';
import Header from '../Header';
import Table from '../Table/TableWrapper';

export interface IProps {
  title: string,
  description?: string,
  illustration?: string,
  tables?: ITableSetup[],
}

const StandardTablePage: SFC<IProps> = ({title, description, tables}) => {
  return (
    <Main>
      {/* <Header>
        <h1><FormattedMessage id={title} /></h1>
        {description && <p><FormattedMessage id={description} /></p>}
      </Header> */}
      {tables && tables.map((table, index) => <Table key={index} {...table} />)}
    </Main>
  );
}

export default StandardTablePage;
