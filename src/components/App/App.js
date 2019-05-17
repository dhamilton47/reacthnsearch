import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from "react-router-dom";
import Page from '../../pages/Page';

import '../App/App.css';
/*
const lists = {
	searchWhat: ["All", "Stories", "Comments"],
	searchBy: ["Popularity", "Date"],
	searchFor: ["All Time", "Last 24h", "Past Week", "Past Month", "Past Year", "Custom Range"],
	shareHow: ["Share on Twitter", "Share on Facebook", "Share by Email"]
};
*/
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			settings: {
				settings: {
					authorText: true,
					dateRange: "all",
					login: false,
					page: 1,
					showThumbnails: false,
					storyText: true,
					style: "default",
					typoTolerance: true
				},
				state: "",
				lists: {
					searchWhat: [
						{
							text: "All",
							link: "/",
							iconClassName: "icon-news",
							state: ""
						},
						{
							text: "Stories",
							link: "",
							iconClassName: "",
							state: ""
						},
						{
							text: "Comments",
							link: "",
							iconClassName: "",
							state: ""
						}
					],
					searchBy: [
						{
							text: "Popularity",
							link: "",
							iconClassName: "",
							state: ""
						},
						{
							text: "Date",
							link: "",
							iconClassName: "",
							state: ""
						}
					],
					searchTimePeriod: [
						{
							text: "All Time",
							link: "",
							iconClassName: "",
							state: ""
						},
						{
							text: "Last 24h",
							link: "",
							iconClassName: "",
							state: ""
						},
						{
							text: "Past Week",
							link: "",
							iconClassName: "",
							state: ""
						},
						{
							text: "Past Month",
							link: "",
							iconClassName: "",
							state: ""
						},
						{
							text: "Past Year",
							link: "",
							iconClassName: "",
							state: ""
						},
						{
							text: "Custom Range",
							link: "",
							iconClassName: "",
							state: ""
						}
					],
					shareHow: [
						{
							text: "Share on Twitter",
							link: "",
							iconClassName: "",
							state: ""
						},
						{
							text: "Share on Facebook",
							link: "",
							iconClassName: "",
							state: ""
						},
						{
							text: "Share by Email",
							link: "",
							iconClassName: "",
							state: ""
						}
					],
					style: ["Default","Experimental"],
					hitsPerPage: ["10","20","30","50"],
					defaultType: ["All","Stories","Comments"],
					defaultSortOrder: ["Most Recent First","Most Popular First"],
					defaultDateRange: ["Last 24h","Past Week","Past Month","Past Year","Forever"],
					storyText: true,
					authorText: true,
					typoTolerance: true,
					routes: {
						home: {
							text: "All",
							link: "/",
							iconClassName: "icon-news",
							state: ""
						},
						about: {
							text: "About",
							link: "/about/",
							iconClassName: "",
							state: ""
						},
						settings: {
							text: "Settings",
							link: "/settings/",
							iconClassName: "",
							state: ""
						},
						help: {
							text: "Help",
							link: "/help/",
							iconClassName: "",
							state: ""
						},
						api: {
							text: "API",
							link: "/api/",
							iconClassName: "",
							state: ""
						},
						coolApps: {
							text: "Cool Apps",
							link: "/cool-apps/",
							iconClassName: "",
							state: ""
						},
						hot: {
							text: "Hot",
							link: "/hot",
							iconClassName: "icon-fire",
							state: ""
						},
						showHN: {
							text: "Show HN",
							link: "/show-hn",
							iconClassName: "icon-megaphone",
							state: ""
						},
						askHN: {
							text: "Ask HN",
							link: "/ask-hn",
							iconClassName: "icon-bubble",
						},
						polls: {
							text: "Polls",
							link: "/polls",
							iconClassName: "icon-bulb",
							state: ""
						},
						jobs: {
							text: "Jobs",
							link: "/jobs",
							iconClassName: "icon-banknote",
							state: ""
						},
						starred: {
							text: "Starred",
							link: "/starred",
							iconClassName: "icon-star",
							state: ""
						}
					}
				}
			}
		}
	}

	render() {
		return (
			<Router>
				<Route path="/" exact render={props => <Page page={"home"} settings={this.state.settings}/>}/>
				<Route path="/about/" render={props => <Page page={"about"} settings={this.state.settings}/>}/>
				<Route path="/settings/" render={props => <Page page={"settings"} settings={this.state.settings}/>}/>
				<Route path="/help/" render={props => <Page page={"help"} settings={this.state.settings}/>}/>
				<Route path="/api/" render={props => <Page page={"api"} settings={this.state.settings}/>}/>
				<Route path="/cool-apps/" render={props => <Page page={"coolapps"} settings={this.state.settings}/>}/>
				<Route path="/hot" render={props => <Page page={"hot"} settings={this.state.settings}/>}/>
				<Route path="/show-hn" render={props => <Page page={"showhn"} settings={this.state.settings}/>}/>
				<Route path="/ask-hn" render={props => <Page page={"askhn"} settings={this.state.settings}/>}/>
				<Route path="/polls" render={props => <Page page={"polls"} settings={this.state.settings}/>}/>
				<Route path="/jobs" render={props => <Page page={"jobs"} settings={this.state.settings}/>}/>
				<Route path="/starred" render={props => <Page page={"starred"} settings={this.state.settings}/>}/>
			</Router>
		);
	}
}

export default App;