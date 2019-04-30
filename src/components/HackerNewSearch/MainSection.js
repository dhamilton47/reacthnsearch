import React, { Component } from 'react';

import {Footer} from "./Footer";

class MainSection extends Component {
	render() {
		return (
			<section className="main">
				{this.props.pageTitle}

				<Footer/>
			</section>
		)
	}

}

export default MainSection;