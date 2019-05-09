import React, {Component} from "react";
import { makePlural } from "../Utils";
import {Icon} from "../Icon";
import * as PropTypes from "prop-types";


export class ItemCommentCount extends Component {
	render() {
		return (
			<li>

				<Icon icon={"icon-speech-bubble"} settings={this.props.settings}/>
				<a
					href={ "https://news.ycombinator.com/item?id" + this.props.story.objectID }
					title="See original post on HN"
				>
					<span className="comments">
						{this.props.story.num_comments} comment{ makePlural(this.props.story.num_comments) }
					</span>
				</a>
			</li>)
			;
	}


}

ItemCommentCount.propTypes = {story: PropTypes.object};