import React, { Component } from 'react';
import { PageHeader } from '../components/HackerNewsSearch/PageHeader';
import MainSection from "../components/HackerNewsSearch/MainSection";

class Settings extends Component {
	render() {
		return (
			<div className="container">
				<PageHeader hasSearch={false}/>
				<MainSection page={"settings"}/>
			</div>
		)
	}
}

export default Settings;