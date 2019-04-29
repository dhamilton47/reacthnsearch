import React, { Component } from 'react';

class SettingsToggle extends Component {
	render() {
		return (
			<div className="nav-link-settings">
				<a
					Link="/settings"
				>
					<i className="icon-params"/>
				</a>
			</div>
		);
	}
}

export default SettingsToggle;