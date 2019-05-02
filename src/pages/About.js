import React, {Component} from 'react';
import {PageHeader} from '../components/HackerNewsSearch/PageHeader';
import MainSection from "../components/HackerNewsSearch/MainSection";

{/*
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
*/}


class About extends Component {
	gotoMenu(text) {}
	render() {
		return (
			<div className="container">
				<PageHeader hasSearch={false}/>
				<MainSection page={"about"}/>
			</div>
		)
	}
}

export default About;