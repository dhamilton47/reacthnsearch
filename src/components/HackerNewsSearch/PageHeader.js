import React from 'react';
import pageHeaderStyle from './css/PageHeader.module.css';
import LogoHN from "./LogoHN";
//import { SearchWrapper } from "./SearchWrapper";
import searchWrapperStyle from "./css/SearchWrapper.module.css";
import SearchInput from "./SearchInput";
import LogoAlgolia from "./LogoAlgolia";
//import SettingsToggle from "./SettingsToggle";
import {Link} from "react-router-dom";

// TODO: refactor null to a 'back' button
export const PageHeader = props => {
	let searchWrapper = null;
	let backButton = null;

	if(props.page === "home") {
		searchWrapper = (
			<React.Fragment>
				{/*<SearchWrapper settings={props.settings}/>*/}
				<div className={searchWrapperStyle.base}>
					<SearchInput settings={props.settings}/>
					<LogoAlgolia/>
				</div>

				{/*<SettingsToggle/>*/}
				<div className={pageHeaderStyle.settingsNavLink}>
					<Link to="/settings/">
						<i className="icon-params"/>
					</Link>
				</div>
			</React.Fragment>
		);
	} else {
		backButton = null;
	}

	return (
		<div id="Page Header" className={pageHeaderStyle.base}>
			<LogoHN/>
			{searchWrapper}
			{backButton}
		</div>
	);
};
