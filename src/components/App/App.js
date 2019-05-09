import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from "react-router-dom";
import About from '../../pages/About';
import Home from '../../pages/Home';
import Settings from '../../pages/Settings';
import Help from '../../pages/Help';
import Api from '../../pages/Api';
import CoolApps from '../../pages/CoolApps';
import Hot from '../../pages/Hot';
import ShowHN from '../../pages/ShowHN';
import AskHN from '../../pages/AskHN';
import Polls from '../../pages/Polls';
import Jobs from '../../pages/Jobs';
import Starred from '../../pages/Starred';

import '../App/App.css';
//import '../HackerNewsSearch/default.css';
//import '../HackerNewsSearch/experimental.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			settings: {
				showThumbnails: false,
				style: "default",
				dateRange: "all",
				page: 1,
				login: false
			},
			state: ""
		}
	}

	render() {
		return (
			<Router>

					{/* <Route path="/" exact component={Home}/>
					<Route path="/about/" component={About}/>
					<Route path="/settings/" component={Settings}/>
					<Route path="/help/" component={Help}/>
					<Route path="/api/" component={Api}/>
					<Route path="/cool-apps/" component={CoolApps}/>
					<Route path="/hot" component={Hot}/>
					<Route path="/show-hn" component={ShowHN}/>
					<Route path="/ask-hn" component={AskHN}/>
					<Route path="/polls" component={Polls}/>
					<Route path="/jobs" component={Jobs}/>
					<Route path="/starred" component={Starred}/>*/}
					<Route
						path="/" exact
						render={props => <Home settings={this.state.settings}/>}
					/>
					<Route
						path="/about/"
						render={props => <About settings={this.state.settings}/>}
					/>
					<Route
						path="/settings/"
							render={props => <Settings settings={this.state.settings}/>}
					/>
					<Route
						path="/help/"
							render={props => <Help settings={this.state.settings}/>}
					/>
					<Route
						path="/api/"
							render={props => <Api settings={this.state.settings}/>}
					/>
					<Route
						path="/cool-apps/"
							render={props => <CoolApps settings={this.state.settings}/>}
					/>
					<Route
						path="/hot"
							render={props => <Hot settings={this.state.settings}/>}/>
					<Route
						path="/show-hn"
							render={props => <ShowHN settings={this.state.settings}/>}
					/>
					<Route
						path="/ask-hn"
							render={props => <AskHN settings={this.state.settings}/>}
					/>
					<Route
						path="/polls"
							render={props => <Polls settings={this.state.settings}/>}
					/>
					<Route
						path="/jobs"
							render={props => <Jobs settings={this.state.settings}/>}
					/>
					<Route
						path="/starred"
							render={props => <Starred settings={this.state.settings}/>}
					/>

			</Router>
		);
	}
}

export default App;