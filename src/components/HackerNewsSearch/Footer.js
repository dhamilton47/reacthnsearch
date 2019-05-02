import React from "react";
import { Link} from "react-router-dom";
import { ListSeparator } from "./ListSeparator";
import { ExternalLink } from "./ExternalLink";

export const Footer = () => {
	return (
		<footer>
			<ul className="list-inline">
				{/*
				<li>
					<Link to="/">Home</Link>
				</li>
				<ListSeparator/>
				*/}
				<li>
					<Link to="/about/">About</Link>
				</li>
				<ListSeparator/>
				<li>
					<Link to="/settings/">Settings</Link>
				</li>
				<ListSeparator/>
				<li>
					<Link to="/help/">Help</Link>
				</li>
				<ListSeparator/>
				<li>
					<Link to="/api/">API</Link>
				</li>
				<ListSeparator/>
				<li>
					<ExternalLink link={"https://news.ycombinator.com"} linkText={"Hacker News"}/>
				</li>
				<ListSeparator/>
				<li>
							<ExternalLink link={"https://github.com/algolia/hn-search"} linkText={"Fork/Contribute"}/>
				</li>
				<ListSeparator/>
				<li>
							<ExternalLink link={"https://status.algolia.com"} linkText={"Status"}/>
				</li>
				<ListSeparator/>
				<li>
					<Link to="/cool-apps/">Cool Apps</Link>
				</li>
			</ul>
		</footer>
	);
};