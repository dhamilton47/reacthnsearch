import React, { Component } from 'react';

import { Footer } from "./Footer";
import { MainContent } from "./MainContent";
import { MainHeader } from "./MainHeader";
import Aside from "./Aside";

class MainSection extends Component {
	render() {
		return (
			<section className="main">
				<Aside settings={this.props.settings}/>
				<MainHeader page={this.props.page}/>

				<MainContent page={this.props.page}/>
				<Footer/>
			</section>
		)
	}

}

export default MainSection;