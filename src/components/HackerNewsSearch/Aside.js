import React, { Component } from 'react';
import { Link } from "react-router-dom";
import asideStyle from './Aside.module.css';

class Aside extends Component {
	render() {
		if(this.props.settings.style === 'experimental') {
			return (
				<div className={asideStyle.aside}>
					<aside className="sidebar">
						<nav>
							<ul>
								<li>
									<Link to="/">
										<i className="icon-news"/>
										All
									</Link>
								</li>
								<li>
									<Link to={"/hot"}>
										<i className="icon-fire"/>
										Hot
									</Link>
								</li>
								<li>
									<Link to={"/show-hn"}>
										<i className="icon-megaphone"/>
										Show HN
									</Link>
								</li>
								<li>
									<Link to={"/ask-hn"}>
										<i className="icon-bubble"/>
										Ask HN
									</Link>
								</li>
								<li>
									<Link to={"/polls"}>
										<i className="icon-bulb"/>
										Polls
									</Link>
								</li>
								<li>
									<Link to={"/Jobs"}>
										<i className="icon-icon-banknote"/>
										Jobs
									</Link>
								</li>
								<li className="divider"/>
								{/*<!-- ngIf: settings.login -->*/}
								<li>
									<Link to={"/starred"}>
										<i className="icon-star"/>
										Starred
									</Link>
								</li>
							</ul>
						</nav>
					</aside>
					{/*<div className="sliding-menu-fade-screen ng-scope" ng-click="toggleNav()"></div>*/}
				</div>
			)
		} else return null
	}
}

export default Aside;