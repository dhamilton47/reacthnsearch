import React, { Component } from 'react';

import {Footer} from "./Footer";
import MainHeader from "./MainHeader";
import {MainContent} from "./MainContent";
import {Aside} from "./Aside";

class MainSection extends Component {
	render() {
		return (
			<section className="main">
				<Aside/>
				<MainHeader/>
				{/* this.props.pageTitle */}
				<MainContent page={this.props.page}/>
				<Footer/>
			</section>
		)
	}

}

export default MainSection;