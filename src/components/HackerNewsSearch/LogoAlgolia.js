import React, { Component } from 'react';
import Algolia from '../../images/logo-algolia-white-full.svg'
import logoAlgoliaStyle from './css/LogoAlgolia.module.css';
//TODO: convert to function
class LogoAlgolia extends Component {
	render() {
		return (
			<span className={logoAlgoliaStyle.logoAlgoliaDefault}>
				by
			<a
				href={"https://www.algolia.com/?utm_source=hn_search&utm_medium=link&utm_term=logo&utm_campaign=hn_algolia"}
				title={"Realtime Search Engine"}
			>
				<img
					src={Algolia}
					alt={"Algolia Logo White Full"}
					width="60"
					height="15"
				/>
			</a>
			</span>

		);
	}
}

export default LogoAlgolia;