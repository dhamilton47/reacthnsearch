import React, { Component } from 'react';

import { MainFooter } from "./MainFooter";
import { MainContent } from "./MainContent";
import { MainHeader } from "./MainHeader";
import Aside from "./Aside";
import mainSectionStyle from './css/MainSection.module.css';

class MainSection extends Component {
	render() {
	let styleCondition = mainSectionStyle.experimental;
	if(this.props.settings.settings.style === 'default') {
		styleCondition = mainSectionStyle.base;
	}
		return (
			<section className={styleCondition}>
				<Aside settings={this.props.settings}/>
				<MainHeader page={this.props.page} settings={this.props.settings}/>

				<MainContent page={this.props.page}/>
				<MainFooter routes={this.props.settings.lists.routes}/>
			</section>
		)
	}

}

export default MainSection;