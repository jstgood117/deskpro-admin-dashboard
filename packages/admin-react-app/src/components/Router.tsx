import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page from './Page';

const Router = () => (
	<BrowserRouter>
    <Switch>
      <Route component={Page} />
    </Switch>
	</BrowserRouter>
);

export default Router;
