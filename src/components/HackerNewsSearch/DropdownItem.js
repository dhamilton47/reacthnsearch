import React from "react";
import dropdownItemStyle from './css/DropdownItem.module.css';

function selectItem() {
}

export default props => {
	return (
		<li className={dropdownItemStyle.base}>

			{/*<a
				href=""
				className="dropdown-item"
				onClick={selectItem}
			>*/}
			{/* eslint-disable-next-line */}
			<a onClick={selectItem}>
				<i className={props.hasIcon}/>
				{props.text}
			</a>
		</li>
	);
}