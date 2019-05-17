import React from "react"
import dropdownListStyle from './css/DropdownList.module.css';

export default ({ children }) => (
	<ul className={dropdownListStyle.base}>
		{children}
	</ul>
)