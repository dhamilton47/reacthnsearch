import React from 'react';

import {state} from './DataForSettings';
//import {MainContentAbout} from "./MainContentAbout";
//import {MainContentSettings} from "./MainContentSettings";
//import {MainContentHelp} from "./MainContentHelp";
//import {MainContentApi} from "./MainContentApi";
//import {MainContentCoolApps} from "./MainContentCoolApps";
//import {MainContentHome} from "./MainContentHome";
import mainHeaderStyle from './css/MainHeader.module.css';
import wrapDropDownMenuStyle from './css/WrapDropdownMenu.module.css';
import {SlidingMenu} from "./SlidingMenu";
import DropdownList from "./DropdownList";
import DropdownItem from "./DropdownItem";
import Dropdown from "./Dropdown";

//TODO: this whole mess is very ugly, refactor
export const MainHeader = props => {

	return (
		<div id="Main - Header" className={mainHeaderStyle.base}>
			{ props.page === 'about' ? <h1>About</h1> : null }
			{ props.page === 'settings' ? <h1>Settings</h1> : null }
			{ props.page === 'help' ? <h1>Help</h1> : null }
			{ props.page === 'api' ? <h1>Api</h1> : null }
			{ props.page === 'coolapps' ? <h1>Cool Apps</h1> : null }
			{
				props.page === 'home'
					? <React.Fragment>
						<SlidingMenu settings={props.settings}/>
						{
							state
								? <span className={mainHeaderStyle.stateTitle}>
						{/* eslint-disable-next-line */}
									<h1>{state}</h1>
									<span className={mainHeaderStyle.filterLabel}>in</span>
								</span>
								: <span className={mainHeaderStyle.filterLabel}>Search</span>
						}
						<Dropdown selected={"Stories"} list={props.settings.lists.searchWhat}/>

						<span className={mainHeaderStyle.filterLabel}>by</span>
						<Dropdown selected={"Popularity"} list={props.settings.lists.searchBy}/>

						<span className={mainHeaderStyle.filterLabel}>for</span>
						<Dropdown selected={"All time"} list={props.settings.lists.searchTimePeriod}/>

						<ul className={mainHeaderStyle.searchInfos}>
							<li># result(s) (0.00N seconds)</li>
							<li className={mainHeaderStyle.actionShare}>
								{/* eslint-disable-next-line */}
								<a className="placeholder"/>
								<div className={wrapDropDownMenuStyle.base}>
									<a
										href="https://hn.algolia.com/?sort=byPopularity&prefix&page=0&dateRange=all&type=story&query="
										className="dropdown-share"
									>
										<i className="icon-share"/>
									</a>
									<DropdownList>
										<DropdownItem hasIcon={"icon-twitter"} text={"Share on Twitter"}/>
										<DropdownItem hasIcon={"icon-facebook"} text={"Share on Facebook"}/>
										<DropdownItem hasIcon={"icon-envelope-o"} text={"Share by Email"}/>
									</DropdownList>
								</div>
							</li>
						</ul>
					</React.Fragment>
					: null
			}
		</div>
	)

};
