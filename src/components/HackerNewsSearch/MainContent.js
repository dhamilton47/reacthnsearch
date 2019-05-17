import React from 'react';

import { MainContentHome } from "./MainContentHome";
import { MainContentAbout } from "./MainContentAbout";
import { MainContentSettings } from "./MainContentSettings";
import { MainContentHelp } from "./MainContentHelp";
import { MainContentApi } from "./MainContentApi";
import { MainContentCoolApps } from "./MainContentCoolApps";
import mainContentStyle from './css/MainContent.module.css';


export const MainContent = props => {
	const query = true;
	//TODO: Need to determine and fix 'query'
	return (
		<div id="Main - Content" className={mainContentStyle.mainContent}>
			{props.page === 'home' ? <MainContentHome query={query}/> : null}
			{props.page === 'about' ? <MainContentAbout/> : null}
			{props.page === 'settings' ? <MainContentSettings settings={props.settings}/> : null}
			{props.page === 'help' ? <MainContentHelp/> : null}
			{props.page === 'api' ? <MainContentApi/> : null}
			{props.page === 'coolapps' ? <MainContentCoolApps/> : null}
			{/* TODO: see if this works */}
			{/* eslint-disable-next-line */}
			<a className="scroll-to-top fade ng-scope" href="#" title="Back to top">
				<span className="tooltip">
					<span>Top [↑]</span>
				</span>
			</a>
		</div>
	)
};
