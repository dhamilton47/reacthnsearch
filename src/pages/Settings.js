import React, { Component } from 'react';
import { PageHeader } from '../components/HackerNewSearch/PageHeader';
import MainSection from "../components/HackerNewSearch/MainSection";

class Settings extends Component {
	render() {
		return (
			<div className="container">
				<PageHeader hasSearch={false}/>
				<MainSection pageTitle={"Setting the world straight"}/>
			</div>
		)
	}
}

export default Settings;