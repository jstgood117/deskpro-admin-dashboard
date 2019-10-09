import React, { Fragment } from 'react';

import AdminNav from "./components/Sidebar";
import Router from "./components/Router";


const App: React.SFC = () => (
  <Fragment>
		<AdminNav />
		<Router />
	</Fragment>
)

export default App;
