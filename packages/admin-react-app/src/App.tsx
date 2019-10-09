import React, { SFC } from 'react';
import { styled, Grid } from 'deskpro-component-library';

import Sidebar from "./components/Sidebar";
import Router from "./components/Router";

const App: SFC = () => (
  <Grid>
		<Sidebar />
		<Router />
	</Grid>
)

export default App;
