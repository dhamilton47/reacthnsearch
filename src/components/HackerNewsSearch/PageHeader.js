import React from 'react';
import pageHeaderStyle from './PageHeader.module.css';
import LogoHN from "./LogoHN";
import { SearchWrapper } from "./SearchWrapper";

export const PageHeader = props => {
	return (
		<header className={pageHeaderStyle.pageHeader}>
			<LogoHN/>
				{/* <div>
					<LogoHN/>
				</div> */}

			{
				props.hasSearch ?
					<SearchWrapper settings={props.settings}/>
					: null
			}
		</header>
	);
};
