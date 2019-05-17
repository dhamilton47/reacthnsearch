import React from "react"
import dropdownButtonStyle from './css/DropdownButton.module.css';

export default props => (
	<button
		onClick={props.onClick}
		className={dropdownButtonStyle.base}
	>
		{props.selected}
	</button>
)