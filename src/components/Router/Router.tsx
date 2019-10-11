import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';

import Grid from '../Grid';
import Sidebar from '../Sidebar';
import Agents from '../Agents';
import Page from '../Page';

const Router = () => (
	<HashRouter>
  	<Grid>
		  <Sidebar />
      <Switch>
        <Route exact path='/agent' component={Agents} />
        <Route component={Page} />
      </Switch>
    </Grid>
	</HashRouter>
);

export default Router;
