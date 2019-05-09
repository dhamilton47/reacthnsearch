import React, { Component } from 'react';

import { Footer } from "./Footer";
import { MainContent } from "./MainContent";
import { MainHeader } from "./MainHeader";
import Aside from "./Aside";
import mainSectionStyle from './MainSection.module.css';

class MainSection extends Component {
	render() {
		return (
			<section className={mainSectionStyle.mainSection}>
				<Aside settings={this.props.settings}/>
				<MainHeader page={this.props.page}/>

				<MainContent page={this.props.page}/>
				<Footer/>
			</section>
		)
	}

}

export default MainSection;