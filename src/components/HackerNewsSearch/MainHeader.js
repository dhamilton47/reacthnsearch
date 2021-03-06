import React from 'react';

import { state } from './DataForSettings';
import {SectionAbout} from "./SectionAbout";
import {SectionSettings} from "./SectionSettings";
import {SectionHelp} from "./SectionHelp";
import {SectionApi} from "./SectionApi";
import {SectionCoolApps} from "./SectionCoolApps";
import {SectionHome} from "./SectionHome";
//TODO: this whole mess is very ugly, refactor
export const MainHeader = props => {
		return (
			<header>
				{ props.page === 'about' ? <h1>About</h1> : null }
				{ props.page === 'settings' ? <h1>Settings</h1> : null }
				{ props.page === 'help' ? <h1>Help</h1> : null }
				{ props.page === 'api' ? <h1>Api</h1> : null }
				{ props.page === 'coolapps' ? <h1>Cool Apps</h1> : null }
				{
					props.page === 'home'
						? <React.Fragment>
							<a className="sliding-menu-button ng-binding ng-scope" ng-click="toggleNav()" type="button"></a>
							{
								state
									? <span className="state-title">
										<h1></h1>
										<span className="filter-label">in</span>
									</span>
									: null
							}

							<span className="filter-label">
								Search
							</span>
							<div className="type-dropdown wrap-dd-select">
								<span className="selected">
									Stories
								</span>
								<ul className="dropdown">
									<li className="dropdown-item">
										<a
											href=""
											className="dropdown-item"
											onClick={null}
										>
											All
										</a>
									</li>
									<li className="dropdown-item">
										<a
											href=""
											className="dropdown-item"
											onClick={null}
										>
											Stories
										</a>
									</li>
									<li className="dropdown-item">
										<a
											href=""
											className="dropdown-item"
											onClick={null}
										>
											Comments
										</a>
									</li>
								</ul>
							</div>
							<span className="filter-label">
								by
							</span>
							<div className="type-dropdown wrap-dd-select">
								<span className="selected">
									Popularity
								</span>
								<ul className="dropdown">
									<li className="dropdown-item">
										<a
											href=""
											className="dropdown-item"
											onClick={null}
										>
											Popularity
										</a>
									</li>
									<li className="dropdown-item">
										<a
											href=""
											className="dropdown-item"
											onClick={null}
										>
											Date
										</a>
									</li>
								</ul>
							</div>
							<span className="filter-label">
								for
							</span>
							<div className="type-dropdown wrap-dd-select">
								<span className="selected">
									All time
								</span>
								<ul className="dropdown">
									<li className="dropdown-item">
										<a
											href=""
											className="dropdown-item"
											onClick={null}
										>
											All time
										</a>
									</li>
									<li className="dropdown-item">
										<a
											href=""
											className="dropdown-item"
											onClick={null}
										>
											Last 24h
										</a>
									</li>
									<li className="dropdown-item">
										<a
											href=""
											className="dropdown-item"
											onClick={null}
										>
											Past Week
										</a>
									</li>
									<li className="dropdown-item">
										<a
											href=""
											className="dropdown-item"
											onClick={null}
										>
											Past Month
										</a>
									</li>
									<li className="dropdown-item">
										<a
											href=""
											className="dropdown-item"
											onClick={null}
										>
											Past Year
										</a>
									</li>
									<li className="dropdown-item">
										<a
											href=""
											className="dropdown-item"
											onClick={null}
										>
											Custom Range
										</a>
									</li>
								</ul>
							</div>
							<ul className="list-inline search-infos">
								<li># result(s) (0.00N seconds)</li>
								<li className="action-share">
									<a className="placeholder"/>
									<div className="wrap-dd-menu">
										<a
											href="https://hn.algolia.com/?sort=byPopularity&prefix&page=0&dateRange=all&type=story&query="
											className="dropdown-share"
										>
											<i className="icon-share"/>
										</a>
										<ul className="dropdown">
											<li className="dropdown-item">
												<a href="" className="dropdown-item">
													<i className="icon-twitter"/>
													Share on Twitter
												</a>
											</li>
											<li className="dropdown-item">
												<a href="" className="dropdown-item">
													<i className="icon-facebook"/>
													Share on Facebook
												</a>
											</li>
											<li className="dropdown-item">
												<a href="" className="dropdown-item">
													<i className="icon-envelope-o"/>
													Share by Email
												</a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</React.Fragment>
						: null
				}
			</header>
		)

};
