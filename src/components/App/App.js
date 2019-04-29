import React, { Component } from 'react';
//import './App.css';
import HackerNewsSearch from "../HackerNewSearch/HackerNewsSearch";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from '../../pages/About';
import Home from '../../pages/Home';
import Settings from '../../pages/Settings';

function Footer() {
	return <nav>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about/">About</Link>
			</li>
			<li>
				<Link to="/settings/">Settings</Link>
			</li>
		</ul>
	</nav>;
}

function App() {
	return (
		<Router>
			<div>
				<Footer/>

				<Route path="/" exact component={Home}/>
				<Route path="/about/" component={About}/>
				<Route path="/settings/" component={Settings}/>
			</div>
		</Router>
	);
}

export default App;