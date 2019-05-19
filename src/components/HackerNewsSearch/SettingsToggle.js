import React, { Component } from 'react';
import {Link} from "react-router-dom";
import settingsNavLinkStyle from './css/SettingsNavLink.module.css';

//TODO: convert to function
class SettingsToggle extends Component {
	render() {
		return (
			<div className={settingsNavLinkStyle.base}>
				<Link to="/settings/">
					<i className="icon-params"/>
				</Link>
			</div>
		);
	}
}

export default SettingsToggle;