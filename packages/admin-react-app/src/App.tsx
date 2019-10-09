import React from 'react';
import styled from 'styled-components';

import AdminNav from "./components/Sidebar";
import Router from "./components/Router";

const Grid = styled.div`
	display: inline-grid;
	grid-template-columns: auto auto;
`

const App: React.SFC = () => (
  <Grid>
		<AdminNav />
		<Router />
	</Grid>
)

export default App;
