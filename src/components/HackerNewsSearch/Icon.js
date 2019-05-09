import React from "react";

export const Icon = props => {
	if (props.settings.style === "experimental") {
		return <i className={props.icon}/>;
	} else {
		return null;
	}
};