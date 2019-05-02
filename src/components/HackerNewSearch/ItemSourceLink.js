import React, {Component} from "react";
import * as PropTypes from "prop-types";

export class ItemSourceLink extends Component {
	//TODO: fix the "domain" attribute
	render() {
		return (
			<li>
				<a
					className={'hit-link'}
					href={this.props.story.url}
					title="Link to news item"
				>
					({this.props.story._highlightResult.url.value + " | domain" })
				</a>
			</li>
		);
	}
}

ItemSourceLink.propTypes = {story: PropTypes.object};