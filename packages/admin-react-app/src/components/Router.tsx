import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';

import Agents from './Agents';
import Agents2 from './Agents2';
import Page from './Page';

const Router = () => (
	<HashRouter>
	    <Switch>
	      <Route exact path='/agent' component={Agents} />
	      <Route exact path='/agent2' component={Agents2} />
	      <Route component={Page} />
	    </Switch>
	</HashRouter>
);

export default Router;
