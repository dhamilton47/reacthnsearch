import * as PropTypes from "prop-types";
import React from "react";

export const ShowStoryText = props => {
	return <div className="text-container" style={{display: "none"}}>
		{props.story._highlightResult.comment_text.value | props.cleanup}
	</div>;
}

ShowStoryText.propTypes = {
	story: PropTypes.object,
	cleanup: PropTypes.func
};