import React, { Component } from 'react';
import { PageHeader } from '../components/HackerNewsSearch/PageHeader';
import MainSection from "../components/HackerNewsSearch/MainSection";

class CoolApps extends Component {
	render() {
		return (
			<div className="container">
				<PageHeader hasSearch={false}/>
				<MainSection page={"coolapps"}/>
			</div>
		)
	}
}

export default CoolApps;