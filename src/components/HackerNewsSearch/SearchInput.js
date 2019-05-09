import React, {Component} from 'react';
import searchInputStyle from './SearchInput.module.css';

class SearchInput extends Component {

//TODO:  need HNSearchAPI object here
/*
	ng-model="$parent.query"
	ng-model-options="{debounce: 100}"
	ng-blur="blurred()"
	ng-keyup="keyup($event)"
*/
	render() {

		return (
			<div className={searchInputStyle.base}>
				<i className="icon-search"/>
				<input
					type="search"
					placeholder="Search stories by title, url or author"
					autoComplete="off"
					autoCapitalize="off"
					spellCheck="false"
					autoCorrect="off"
					autoFocus=""
				/>
			</div>
		)
	}
}

export default SearchInput;