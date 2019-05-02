import React, { Component } from 'react';
import { PageHeader } from '../components/HackerNewSearch/PageHeader';
import MainSection from '../components/HackerNewSearch/MainSection';

class Home extends Component {
	render() {
		return (
			<div className="container">
				<PageHeader hasSearch={true}/>
				<MainSection page={"home"}/>
			</div>
		)
	}
}

export default Home;