import React from "react";
import { ExternalLink } from "./ExternalLink";
import { ListLink } from "./ListLink";import { ListSeparator } from "./ListSeparator";
import mainFooterStyle from './css/MainFooter.module.css';


export const MainFooter = props => {
	return (
		<div id="Main - Footer" className={mainFooterStyle.base}>
			<ul>
				<ListLink location={props.routes.about}/>
				<ListSeparator/>
				<ListLink location={props.routes.settings}/>
				<ListSeparator/>
				<ListLink location={props.routes.help}/>
				<ListSeparator/>
				<ListLink location={props.routes.api}/>
				<ListSeparator/>
				<ExternalLink link={"https://news.ycombinator.com"} linkText={"Hacker News"}/>
				<ListSeparator/>
				<ExternalLink link={"https://github.com/algolia/hn-search"} linkText={"Fork/Contribute"}/>
				<ListSeparator/>
				<ExternalLink link={"https://status.algolia.com"} linkText={"Status"}/>
				<ListSeparator/>
				<ListLink location={props.routes.coolApps}/>
			</ul>
		</div>
	);
};