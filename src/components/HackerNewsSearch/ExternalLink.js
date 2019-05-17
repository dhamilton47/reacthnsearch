import React from "react";

export function ExternalLink(props) {
	return (
		<li>
			<a href={props.link}>{props.linkText}</a>
		</li>
	);
}