import React from "react";
import SearchInput from "./SearchInput";
import LogoAlgolia from "./LogoAlgolia";
import SettingsToggle from "./SettingsToggle";
import searchWrapperStyle from './SearchWrapper.module.css';


export const SearchWrapper = props => {
	return (
		<React.Fragment>
			<div className={searchWrapperStyle.base}>
				<SearchInput settings={props.settings}/>
				<LogoAlgolia/>
			</div>

			<SettingsToggle/>
		</React.Fragment>
	);
};