import React from "react";

export function ExternalLink(props) {
	return <a href={props.link}>{props.linkText}</a>;
}