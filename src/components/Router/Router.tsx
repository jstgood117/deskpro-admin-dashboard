import React, { SFC } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { IUser, ISidebarSection, ITranslation } from '../../resources/interfaces';
import Page from '../Page';

interface IProps {
  user: IUser,
  sidebar: ISidebarSection[],
  translations: ITranslation,
}
const Router: SFC<IProps> = (props) => (
	<HashRouter>
    <Switch>
      <Route render={(p) => <Page {...p} sidebar={props.sidebar} />} />
    </Switch>
	</HashRouter>
);

export default Router;
