import React from 'react';

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
import '../HackerNewsSearch/default.css';
import '../HackerNewsSearch/experimental.css';

function App() {
	return (
		<Router>
			<div>
				<Route path="/" exact component={Home}/>
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
				<Route path="/starred" component={Starred}/>
			</div>
		</Router>
	);
}

export default App;