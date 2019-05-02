import React, { Component } from 'react';
//import './Sort.css';
import { state } from './DataForSettings';

class MainHeader extends Component {
	render() {
		return (
			<header>
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
			</header>
		)
	}
}

export default MainHeader;