import React from 'react';

class DevApiPrompt extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event: any) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event: any) {
		event.preventDefault();
		window.sessionStorage.setItem('DESKPRO_ADMIN_API_URL', this.state.value);
		window.location.reload();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
				API URL:
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Set" />
			</form>
		);
	}
}

export default DevApiPrompt;
