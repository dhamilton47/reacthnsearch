import React, {Component} from "react";
import Item from "./Item/Item";

export class Items extends Component {
	render() {
		return (
			<ul>
				{this.props.results.hits.map(story => <li key={story.objectID}><Item story={story}/></li>)}
			</ul>
		);
	}
}