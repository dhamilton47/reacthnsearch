import React, {Component} from "react";
import * as PropTypes from "prop-types";

export class ItemPosted extends Component {
	//TODO: fix time
	render() {
		return (
			<li>
				<i className="icon-clock"/>
				<a
					href={ "https://news.ycombinator.com/item?id=" + (this.props.story._tags[0] === "comment" ? this.props.story.story_id + "#" + this.props.story.objectID : this.props.story.objectID) }
					title={this.props.story.posted}
				>
					<span className="date">{this.props.story.posted} year{this.props.story.posted > 1 ? "s" : ""} ago</span>
				</a>
			</li>
		);
	}
}

ItemPosted.propTypes = {story: PropTypes.object};