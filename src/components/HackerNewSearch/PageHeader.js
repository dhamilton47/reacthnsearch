import React from 'react';
import LogoHN from "./LogoHN";
import {SearchWrapper} from "./SearchWrapper";

export const PageHeader = props => {
	return (
		<header className="page-header">
			<div className="logo-wrapper">
				<LogoHN/>
			</div>

			{
				props.hasSearch ?
					<SearchWrapper/>
					: null
			}
		</header>
	);
};
