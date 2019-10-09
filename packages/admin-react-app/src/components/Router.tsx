import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Agents from './Agents';
import Page from './Page';

const Router = () => (
	<BrowserRouter>
    <Switch>
      <Route exact path='/agent' component={Agents} />
      <Route component={Page} />
    </Switch>
	</BrowserRouter>
);

export default Router;
