import React, { Component } from 'react';
import { PageHeader } from '../components/HackerNewsSearch/PageHeader';
import MainSection from '../components/HackerNewsSearch/MainSection';

class Jobs extends Component {
	render() {
		return (
			<div className="container">
				<PageHeader hasSearch={true}/>
				<MainSection page={"jobs"} settings={this.props.settings}/>
			</div>
		)
	}
}

export default Jobs;