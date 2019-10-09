import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Agents from './Agents';
import Agents2 from './Agents2';
import Page from './Page';

const Router = () => (
	<BrowserRouter>
    <Switch>
      <Route exact path='/agent' component={Agents} />
      <Route exact path='/agent2' component={Agents2} />
      <Route component={Page} />
    </Switch>
	</BrowserRouter>
);

export default Router;
