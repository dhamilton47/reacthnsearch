import React, { Component } from 'react';
import { PageHeader } from '../components/HackerNewsSearch/PageHeader';
import MainSection from '../components/HackerNewsSearch/MainSection';

class Hot extends Component {
	render() {
		return (
			<div className="container">
				<PageHeader hasSearch={true}/>
				<MainSection page={"hot"}/>
			</div>
		)
	}
}

export default Hot;