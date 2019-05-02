import React from "react";
import SearchInput from "./SearchInput";
import LogoAlgolia from "./LogoAlgolia";
import SettingsToggle from "./SettingsToggle";


export const SearchWrapper = () => {
	return (
		<React.Fragment>
			<div className="search-wrapper">
				<SearchInput/>
				<LogoAlgolia/>
			</div>

			<SettingsToggle/>
		</React.Fragment>
	);
};