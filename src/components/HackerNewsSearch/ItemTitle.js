import React, {Component} from "react";
//import {hit, settings, state} from './DataForSettings';
import * as PropTypes from "prop-types";

export class ItemTitle extends Component {
	//TODO: try to figure out this mess
	/* Unresolved Angular commands
		<a
			bo-href="{hit.url} || ('https://news.ycombinator.com/item?id=' + {hit.objectID})"
			bo-html="hit._highlightResult.title.value"
			bo-show="hit._tags[0] === 'story' || hit._tags[0] === 'poll' || hit._tags[0] === 'job'"
			ng-click="gotoHit(hit.objectID)"
		>
	 */
	render() {
		return (
			<React.Fragment>
				<h2>
				<a
					href={this.props.story._highlightResult.url.value}
				>
					{this.props.story._highlightResult.title.value}
				</a>
				</h2>

				{/*
					TODO: work this out
					<!-- boIf: hit._tags[0] === 'comment' --> */}
				{
					this.props.story._tags[0] === 'comment'
						? null
						: null
				}
			</React.Fragment>
		);
	}
}

ItemTitle.propTypes = {story: PropTypes.object};