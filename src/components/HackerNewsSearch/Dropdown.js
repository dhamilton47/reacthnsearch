import React, { Component } from "react"
import dropdownStyle from './css/Dropdown.module.css';
import DropdownButton from "./DropdownButton";
import DropdownList from "./DropdownList";
import DropdownItem from "./DropdownItem";
import wrapDropDownSelectStyle from "./css/WrapDropdownSelect.module.css";

class Dropdown extends Component {
	constructor(props) {
		super(props);

		this.state = { selected: "All" }
	}

	handleClick() {}

	render() {
		return (
			<div className={wrapDropDownSelectStyle.base}>
				<span className="selected">{this.props.selected}</span>
				{/*	<DropdownButton
					selected={this.state.selected}
					onClick={this.handleClick}
				/> */}
				<DropdownList>
					{this.props.list.map(item => <DropdownItem hasIcon={null} text={item.text}/>)}
				</DropdownList>
			</div>
		);
	}
}

export default Dropdown;

/* When the user clicks on the button,
	toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};
