import React, {Component} from 'react';
import {PageHeader} from '../components/HackerNewSearch/PageHeader';
import MainSection from "../components/HackerNewSearch/MainSection";
import {Aside} from "../components/HackerNewSearch/Aside";
import {Footer} from "../components/HackerNewSearch/Footer";
import {SectionAbout} from "../components/HackerNewSearch/SectionAbout";

{/*
class About extends Component {
	render() {
		return (
			<div className="container">
				<PageHeader hasSearch={false}/>
				<MainSection pageTitle={"About the world"}/>
			</div>
		)
	}
}
*/}


class About extends Component {
	gotoMenu(text) {}
	render() {
		return (
			<div className="container">
				<PageHeader hasSearch={false}/>
				<MainSection page={"about"}/>

				{/*
				<section className="main">
					<Aside/>

					<header>
						<h1>About</h1>
					</header>


					<SectionAbout/>

					<Footer/>
				</section>
				*/}
			</div>
		)
	}
}

export default About;