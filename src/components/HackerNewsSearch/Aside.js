import React, {Component} from 'react';
import {Link} from "react-router-dom";
import asideStyle from './css/Aside.module.css';
import {ListLink} from "./ListLink";

class Aside extends Component {
	render() {
		if(this.props.settings.settings.style === 'experimental') {
			return (
				<div>
					<aside className={asideStyle.base}>
						<nav>
							<ul>
								<li>
									<Link to="/"><i className="icon-news"/>All</Link>
								</li>
								<ListLink location={this.props.settings.lists.routes.home}/>
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