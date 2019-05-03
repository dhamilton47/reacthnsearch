import React, { Component } from 'react';
import { PageHeader } from '../components/HackerNewsSearch/PageHeader';
import MainSection from "../components/HackerNewsSearch/MainSection";

class Help extends Component {
	render() {
		return (
			<div className="container">
				<PageHeader hasSearch={false}/>
				<MainSection page={"help"} settings={this.props.settings}/>
			</div>
		)
	}
}

export default Help;