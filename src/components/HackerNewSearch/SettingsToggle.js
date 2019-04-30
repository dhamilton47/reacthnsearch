import React, { Component } from 'react';
import {Link} from "react-router-dom";

class SettingsToggle extends Component {
	render() {
		return (
			<div className="nav-link-settings">
				<Link to="/settings/">
					<i className="icon-params"/>
				</Link>
			</div>
		);
	}
}

export default SettingsToggle;