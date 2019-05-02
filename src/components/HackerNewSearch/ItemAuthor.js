import React, {Component} from "react";
import * as PropTypes from "prop-types";

export class ItemAuthor extends Component {
	render() {
		return (
			<li>
				<i className="icon-head"/>
				<a
					className={'item-nav-author'}
					href={`https://news.ycombinator.com/user?id=${this.props.story.author}`}
					title={'See ' + this.props.story.author + ' profile'}
				>
					<span className="author">{this.props.story._highlightResult.author.value}</span>
				</a>
			</li>
		);
	}
}

ItemAuthor.propTypes = {story: PropTypes.object};