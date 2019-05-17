import React, { Component } from 'react';
import { PageHeader } from '../components/HackerNewsSearch/PageHeader';
import '../components/HackerNewsSearch/css/Page.css';
import Aside from "../components/HackerNewsSearch/Aside";
import {MainHeader} from "../components/HackerNewsSearch/MainHeader";
import {MainContent} from "../components/HackerNewsSearch/MainContent";
import {MainFooter} from "../components/HackerNewsSearch/MainFooter";

class Page extends Component {
	render() {
		let styleCondition = "container-experimental";
		if(this.props.settings.settings.style === 'default') {
			styleCondition = "container-default";
		}
		return (
			<div className={styleCondition}>
				<PageHeader page={this.props.page} settings={this.props.settings}/>
				<Aside settings={this.props.settings}/>
				<MainHeader page={this.props.page} settings={this.props.settings}/>

				<MainContent page={this.props.page} settings={this.props.settings}/>
				<MainFooter routes={this.props.settings.lists.routes}/>
			</div>
		)
	}
}

export default Page;