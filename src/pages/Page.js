import React, { Component } from 'react';
import { PageHeader } from '../components/HackerNewsSearch/PageHeader';
import MainSection from '../components/HackerNewsSearch/MainSection';

class Page extends Component {
	render() {
		return (
			<div>
				<PageHeader page={this.props.page} settings={this.props.settings}/>
				<MainSection page={this.props.page} settings={this.props.settings}/>
			</div>
		)
	}
}

export default Page;