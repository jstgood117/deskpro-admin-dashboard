import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Grid from '../Grid';
import Sidebar from '../Sidebar';
import Agents from '../Agents';
import Page from '../Page';

const Router = () => (
	<BrowserRouter>
  	<Grid>
		  <Sidebar />
      <Switch>
        <Route exact path='/agent' component={Agents} />
        <Route component={Page} />
      </Switch>
    </Grid>
	</BrowserRouter>
);

export default Router;
