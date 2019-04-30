import React from 'react';

import {BrowserRouter as Router, Route} from "react-router-dom";
import About from '../../pages/About';
import Home from '../../pages/Home';
import Settings from '../../pages/Settings';
import Help from '../../pages/Help';
import Api from '../../pages/Api';
import CoolApps from '../../pages/CoolApps';

import '../App/App.css';
import '../HackerNewSearch/default.css';
import '../HackerNewSearch/experimental.css';

function App() {
	return (
		<Router>
			<div>
				{/* <Footer/> */}

				<Route path="/" exact component={Home}/>
				<Route path="/about/" component={About}/>
				<Route path="/settings/" component={Settings}/>
				<Route path="/help/" component={Help}/>
				<Route path="/api/" component={Api}/>

				<Route path="https://news.ycombinator.com" component={null}/>
				{/*
				<Route path="/settings/" component={Settings}/>
				<Route path="/settings/" component={Settings}/>
				*/}
				<Route path="/cool-apps/" component={CoolApps}/>
			</div>
		</Router>
	);
}

export default App;