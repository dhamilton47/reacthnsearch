import React, { Component } from 'react';
import {Link} from "react-router-dom";
//TODO: convert to function
class LogoHN extends Component {
	render() {
		return (
			<Link className="logo" to="/">
				<img
					src="https://hn.algolia.com/assets/logo-hn-search.png"
					alt="Hacker News"
				/>
				<div className="logo-name">
					Search<br/>Hacker News
				</div>
			</Link>
		);
	}
}

export default LogoHN;