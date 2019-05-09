import React from 'react';

import { SectionHome } from "./SectionHome";
import { SectionAbout } from "./SectionAbout";
import { SectionSettings } from "./SectionSettings";
import { SectionHelp } from "./SectionHelp";
import { SectionApi } from "./SectionApi";
import { SectionCoolApps } from "./SectionCoolApps";
import mainContentStyle from './MainContent.module.css';


export const MainContent = props => {
	const query = true;
	//TODO: Need to determine and fix 'query'
	return (
		<section className={mainContentStyle.mainContent}>
			{props.page === 'home' ? <SectionHome query={query}/> : null}
			{props.page === 'about' ? <SectionAbout/> : null}
			{props.page === 'settings' ? <SectionSettings/> : null}
			{props.page === 'help' ? <SectionHelp/> : null}
			{props.page === 'api' ? <SectionApi/> : null}
			{props.page === 'coolapps' ? <SectionCoolApps/> : null}
			{/* TODO: see if this works */}
			{/* eslint-disable-next-line */}
			<a className="scroll-to-top fade ng-scope" href="#" title="Back to top">
				<span className="tooltip">
					<span>Top [↑]</span>
				</span>
			</a>
		</section>
	)
};
