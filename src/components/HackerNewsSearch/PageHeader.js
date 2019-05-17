import React from 'react';
import pageHeaderStyle from './css/PageHeader.module.css';
import LogoHN from "./LogoHN";
import { SearchWrapper } from "./SearchWrapper";
// TODO: refactor null to a 'back' button
export const PageHeader = props => {
	return (
		<div id="Page Header" className={pageHeaderStyle.base}>
			<LogoHN/>

			{
				props.page === "home" ?
					<SearchWrapper settings={props.settings}/>
					: null
			}
		</div>
	);
};
