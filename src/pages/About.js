import React, {Component} from 'react';
import {PageHeader} from '../components/HackerNewsSearch/PageHeader';
import MainSection from "../components/HackerNewsSearch/MainSection";

class About extends Component {
	//TODO: Research need for this method
	gotoMenu(text) {}

	render() {
		return (
			<div className="container">
				<PageHeader hasSearch={false}/>
				<MainSection page={"about"} settings={this.props.settings}/>
			</div>
		)
	}
}

export default About;