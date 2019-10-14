import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';

import Agents from '../Agents';
import Page from '../Page';

const Router = () => (
	<HashRouter>
    <Switch>
      <Route exact path='/agent' component={Agents} />
      <Route component={Page} />
    </Switch>
	</HashRouter>
);

export default Router;
