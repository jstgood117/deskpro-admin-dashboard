import React, { SFC } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { IUser, ISidebarSection, ITranslation } from '../../resources/interfaces';
import Agents from '../Agents';
import Page from '../Page';

interface IProps {
  user: IUser,
  sidebar: ISidebarSection[],
  translations: ITranslation,
}
const Router: SFC<IProps> = (props) => (
	<HashRouter>
    <Switch>
      <Route exact path='/agent' render={(p) => <Agents {...p} {...props} />} />
      <Route render={(p) => <Page {...p} {...props} />} />
    </Switch>
	</HashRouter>
);

export default Router;
