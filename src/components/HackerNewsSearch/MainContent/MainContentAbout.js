import React from "react";
import pageStyle from '../css/MainContent.module.css';

//TODO: enforce consistent coding style
export function MainContentAbout() {
	return (
		<section className={pageStyle.page}>
			<p>HN Search provides real-time full-text search for the <a
				href="http://news.ycombinator.com">HackerNews</a> community site. Source code is available on <a
				href="https://github.com/algolia/hn-search">GitHub</a>. The search backend is implemented using <a
				href="http://www.algolia.com">Algolia</a> instant search engine.</p>
			<h3>How it works</h3>
			<p>Items are updated in real-time using official <a href="https://github.com/HackerNews/API">HackerNews
				API</a>. Data is indexed on 3 different servers for high availability, hosted in Beauharnois, Canada.
			</p>
			<h3>Credits</h3>
			<p>Special thanks to the <a href="https://www.firebase.com/">Firebase</a>, <a
				href="http://octopart.com/">Octopart</a> and <a href="https://news.ycombinator.com">YC</a> teams for
				providing us the data.</p>
			<ul>
				<li><a href="https://news.ycombinator.com">Hacker News</a></li>
				<li><a
					href="http://www.algolia.com/?utm_source=hn_search&amp;utm_medium=link&amp;utm_term=about&amp;utm_campaign=hn_algolia">Algolia</a>
				</li>
				<li><a href="https://www.firebase.com/">Firebase</a></li>
				<li><a href="http://octopart.com">Octopart</a></li>
				<li><a href="http://www.algolia.com/doc/rest_api">Algolia REST API</a></li>
				<li><a href="https://github.com/algolia/algoliasearch-rails">AlgoliaSearch Rails client</a></li>
			</ul>
		</section>
	)
}