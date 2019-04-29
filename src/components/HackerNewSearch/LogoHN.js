import React, { Component } from 'react';

class LogoHN extends Component {
	render() {
		return (
			<a
				className="logo"
				href="/?"
			>
				<img
					src="https://hn.algolia.com/assets/logo-hn-search.png"
					alt="Hacker News"
					className="logo-img"
				/>
				<div className="logo-name">
					Search<br/>Hacker News
				</div>
			</a>
		);
	}
}

export default LogoHN;