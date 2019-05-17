//TODO: enforce consistent coding style
import settingsStyle from "./css/EditSettings.module.css";
import React from "react";

export default props => {
	let index = props.index;
	return <div className={settingsStyle.formGroup}>
		<label
			className={settingsStyle.labelControl}
			htmlFor={index}
		>
			{props.text}
		</label>
		<div className={settingsStyle.formControl}>
			<select
				id={index}
				ng-model="settings.style"
			>
				{props.settings.lists[index].map(
					item => <option key={item} value={item}>{item}</option>
				)}
			</select>
		</div>
	</div>;
}