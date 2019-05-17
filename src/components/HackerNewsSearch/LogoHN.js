import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logoHNStyle from './css/LogoHN.module.css';

//TODO: convert to function
class LogoHN extends Component {
	render() {
		return (
			<Link className={logoHNStyle.logoHN} to="/">
				<img
					src="https://hn.algolia.com/assets/logo-hn-search.png"
					alt="Hacker News"
				/>
				<div>
					Search<br/>Hacker News
				</div>
			</Link>
		);
	}
}

export default LogoHN;