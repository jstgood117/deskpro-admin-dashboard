import React, { SFC, Fragment } from 'react';

import { ITableSetup } from '../../resources/interfaces';

import Header from '../Header';
import Table from '../Table/TableWrapper';
import { testView } from '../../resources/constants';
import { ILink } from '../Header/Header';

export interface IProps {
  title: string,
  description?: string,
  illustration?: string,
  headerLinks?: Array<ILink>,
  views?: Array<ITableSetup>,
}

const StandardTablePage: SFC<IProps> = ({title, description, headerLinks, views}) => {
  // TODO replace when all the data comes through
  // {views && views.map((table, index) => <Table key={index} {...table} />)}

  return (
    <Fragment>
      <Header title={title} description={description} links={headerLinks} />
      {[testView].map((table, index) => <Table key={index} {...table} />)}
    </Fragment>
  );
}

export default StandardTablePage;
