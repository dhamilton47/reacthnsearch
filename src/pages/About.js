import React, { Component } from 'react';
import { PageHeader } from '../components/HackerNewSearch/PageHeader';
import MainSection from "../components/HackerNewSearch/MainSection";

class About extends Component {
	render() {
		return (
			<div className="container">
				<PageHeader hasSearch={false}/>
				<MainSection pageTitle={"About the world"}/>
			</div>
		)
	}
}

export default About;