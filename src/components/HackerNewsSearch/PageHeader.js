import React from 'react';
import pageHeaderStyle from './PageHeader.module.css';
import LogoHN from "./LogoHN";
import { SearchWrapper } from "./SearchWrapper";
// TODO: refactor null to a 'back' button
export const PageHeader = props => {
	return (
		<header className={pageHeaderStyle.pageHeader}>
			<LogoHN/>

			{
				props.page === "home" ?
					<SearchWrapper settings={props.settings}/>
					: null
			}
		</header>
	);
};
