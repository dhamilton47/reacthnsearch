import React, {Component} from "react";
import sourceLinkStyle from './ItemSourceLink.module.css';
import * as PropTypes from "prop-types";

export class ItemSourceLink extends Component {
	//TODO: fix the "domain" attribute

	render() {
		let style = sourceLinkStyle.sourceLink;
		if(this.props.settings.style === "experimental") {
			style = null;
		}

		return (
			<li>
				<a
					className={style}
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