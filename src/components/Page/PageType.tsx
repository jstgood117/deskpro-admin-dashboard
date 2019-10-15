import React, { SFC } from 'react';

import { IPageProps } from '../../resources/interfaces';
import StandardTablePage from '../StandardTablePage';

export interface IProps {
  path: string,
  pageType: string,
  pageProps: IPageProps,
}

const PageType: SFC<IProps> = ({pageType, pageProps}) => {
  switch (pageType) {
    case "standardTable":
      return <StandardTablePage {...pageProps} />
      
    default:
      return null
  }
}

export default PageType;
