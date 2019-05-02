import React, { Component } from 'react';
import { PageHeader } from '../components/HackerNewSearch/PageHeader';
import MainSection from "../components/HackerNewSearch/MainSection";

class Api extends Component {
	render() {
		return (
			<div className="container">
				<PageHeader hasSearch={false}/>
				<MainSection page={"api"}/>
			</div>
		)
	}
}

export default Api;