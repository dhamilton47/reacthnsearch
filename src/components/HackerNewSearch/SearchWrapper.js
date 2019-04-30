import React from "react";
import SearchInput from "./SearchInput";
import LogoAlgolia from "./LogoAlgolia";
import SettingsToggle from "./SettingsToggle";


export const SearchWrapper = () => {
	return (
		<fragment>
			<div className="search-wrapper">
				<SearchInput/>
				<LogoAlgolia/>
			</div>

			<SettingsToggle/>
		</fragment>
	);
};