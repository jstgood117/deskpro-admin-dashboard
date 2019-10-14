import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {IntlProvider} from 'react-intl';
import { MessageFormatElement } from 'intl-messageformat-parser';

import { testTranslations } from './resources/constants';
import Router from './components/Router';

const apiUrl = window.sessionStorage.getItem('DESKPRO_ADMIN_API_URL');
console.log("API URL: " + apiUrl);

const client = new ApolloClient({
	uri: apiUrl,
});

interface IProps {};
interface IState {
	locale: string,
	translations?: Record<string, string> | Record<string, MessageFormatElement[]>
}

class App extends Component<IProps,IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			locale: 'en-us', // does this come from API call?
			translations: {}
		};
	}

	componentDidMount() {
		// Make API call get translation data
		
		this.setState({ translations: testTranslations });
	}

	render() {
		if (this.state.translations) {
			return (
				<ApolloProvider client={client}>
					<IntlProvider locale={this.state.locale} messages={this.state.translations}>
						<Router />
					</IntlProvider>
				</ApolloProvider>
			);
		}
		return null;
	}
}

export default App;
