import * as PropTypes from "prop-types";
import React from "react";
//TODO: fix onClick and figure out className
export const ItemStarred = props => {
	return <li className="action-toggle-star">
		<a
			href="#"
			className="{ starred: this.isStarred(this.props.story.objectID) }"
			onClick={props.onClick}
		>
			<i className="icon-star"/>
		</a>
	</li>;
}

ItemStarred.propTypes = {onClick: PropTypes.any};