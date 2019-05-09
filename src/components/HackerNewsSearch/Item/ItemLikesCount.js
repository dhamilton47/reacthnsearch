import React, {Component} from "react";
import { makePlural } from "../Utils";
import {Icon} from "../Icon";
import * as PropTypes from "prop-types";

export class ItemLikesCount extends Component {
	render() {
		return (
			<li>
				<Icon icon={"icon-heart"} settings={this.props.settings}/>
				<a
					title="See original post on HN"
					href={ "https://news.ycombinator.com/item?id=" + this.props.story.objectID }
				>
					<span className="date">{this.props.story.points} point{ makePlural(this.props.story.points) }</span>
				</a>
			</li>
		);
	}
}

ItemLikesCount.propTypes = {story: PropTypes.object};