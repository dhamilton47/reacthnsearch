import React from "react";
import settingsStyle from './css/EditSettings.module.css';
import FormGroupSelect from "./FormGroupSelect";

function FormGroupCheckbox(props) {
	return <div className={settingsStyle.formGroup}>
		<label
			className={settingsStyle.labelControl}
			htmlFor={props.index}
		>
			{props.text}
		</label>
		<div className={settingsStyle.formControl}>
			<input
				className={settingsStyle.formControl}
				id={props.index}
				value={props.settings.settings.storyText}
				type="checkbox"
			/>
		</div>
	</div>;
}

//TODO: main area left to connect to handling settings changes
export function MainContentSettings(props) {
	return (
		<section className={settingsStyle.base}>
			<h2>Display options</h2>
			<fieldset>
				{/* <!-- ngIf: settings.style === "experimental" --> */}
				<FormGroupSelect text={"Style"} index={'style'} settings={props.settings}/>
				<FormGroupSelect text={"Hits per page"} index={'hitsPerPage'} settings={props.settings}/>
			</fieldset>

			<h2>Ranking options</h2>
			<fieldset>
				<FormGroupSelect text={"Default type"} index={'defaultType'} settings={props.settings}/>
				<FormGroupSelect text={"Default sort order"} index={'defaultSortOrder'} settings={props.settings}/>
				<FormGroupSelect text={"Default date range"} index={'defaultDateRange'} settings={props.settings}/>

				<FormGroupCheckbox text={"Use the author's username for the search"} index={'authorText'} settings={props.settings}/>
				<div className={settingsStyle.formGroup}>
					<label
						className={settingsStyle.labelControl}
						htmlFor="authorText"
					>
						Use the author's username for the search
					</label>
					<div className={settingsStyle.formControl}>
						<input
							className={settingsStyle.formControl}
							id="authorText"
							ng-model="settings.authorText"
							type="checkbox"
						/>
					</div>
				</div>
				<div className={settingsStyle.formGroup}>
					<label
						className={settingsStyle.labelControl}
						htmlFor="typoTolerance"
					>
						Typo-tolerance
					</label>
					<div className={settingsStyle.formControl}>
						<input
							className={settingsStyle.formControl}
							id="typoTolerance"
							ng-model="settings.typoTolerance"
							type="checkbox"
						/>
					</div>
				</div>
			</fieldset>
		</section>
	)
}