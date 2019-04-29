import React, { Component } from 'react';

import SearchInput from "./SearchInput";
import SettingsToggle from "./SettingsToggle";
import LogoHN from "./LogoHN";
import LogoAlgolia from './LogoAlgolia';

class SearchContainer extends  Component {
	render() {
		return (
			<header className="page-header">
				<div className="logo-wrapper">
					<LogoHN/>
				</div>
				<div className="search-wrapper">
					<div className="item-input-wrapper">
						<i className="icon-search"/>
						<input
							type="search"
							placeholder="Search stories by title, url or author"
							autoCapitalize={"off"}
							autoComplete={"off"}
							autoCorrect={"off"}
							autoFocus
							spellCheck={"false"}
						/>
					</div>
					<LogoAlgolia/>
				</div>
				<SettingsToggle/>
			</header>
		);
		/*
				return <div className="search-container">
					<Logo
						styling={{width: "48px"}}
						src={'https://hn.algolia.com/assets/logo-hn-search.png'}
						alt={'Hacker News'}
					/>
					<SearchInput/>
					<span>by</span>
					<Logo
						styling={{width: "60px", height: "15px"}}
						src={Algolia}
						alt={'Algolia'}
					/>
					<Toggle/>
				</div>;
				*/

	}
}

export default SearchContainer;