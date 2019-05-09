import React, {Component} from "react";
import { Icon } from '../Icon';
import * as PropTypes from "prop-types";
//TODO: clean up
export class ItemAuthor extends Component {
	render() {
		return (
			<li>
				<Icon icon={"icon-head"} settings={this.props.settings}/>

				{/*<i className="icon-head"/>*/}
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