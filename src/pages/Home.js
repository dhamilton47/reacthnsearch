import React, { Component } from 'react';
import { PageHeader } from '../components/HackerNewsSearch/PageHeader';
import MainSection from '../components/HackerNewsSearch/MainSection';

class Home extends Component {
	render() {
		return (
			<div>
				<PageHeader hasSearch={true} settings={this.props.settings}/>
				<MainSection page={"home"} settings={this.props.settings}/>
			</div>
		)
	}
}

export default Home;