import React from "react";
//TODO: enforce consistent coding style
//TODO: main area left to connect to handling settings changes
export function SectionSettings() {
	return (
		<section className="edit-settings">
			<h2>Display options</h2>
			<fieldset>
				{/* <!-- ngIf: settings.style === "experimental" --> */}
				<div className="form-group">
					<label className="label-control" htmlFor="style">Style</label>
					<div className="form-control">
						<select id="style" ng-model="settings.style"
						        className="ng-pristine ng-untouched ng-valid ng-not-empty">
							<option value="default">Default</option>
							<option value="experimental">Experimental</option>
						</select>
					</div>
				</div>
				<div className="form-group">
					<label className="label-control" htmlFor="hitsPerPage">Hits per page</label>
					<div className="form-control">
						<select id="hitsPerPage" ng-model="settings.hitsPerPage"
						        className="ng-pristine ng-untouched ng-valid ng-not-empty">
							<option value="10">10</option>
							<option value="20">20</option>
							<option value="30">30</option>
							<option value="50">50</option>
						</select>
					</div>
				</div>
			</fieldset>
			<h2>Ranking options</h2>
			<fieldset>
				<div className="form-group">
					<label className="label-control" htmlFor="sortOrder">Default type</label>
					<div className="form-control">
						<select id="sortOrder" ng-model="settings.defaultType"
						        className="ng-pristine ng-untouched ng-valid ng-not-empty">
							<option value="all">All</option>
							<option value="story">Stories</option>
							<option value="comment">Comments</option>
						</select>
					</div>
				</div>
				<div className="form-group">
					<label className="label-control" htmlFor="sortOrder">Default sort order</label>
					<div className="form-control">
						<select id="sortOrder" ng-model="settings.defaultSort"
						        className="ng-pristine ng-untouched ng-valid ng-not-empty">
							<option value="byDate">Most Recent First</option>
							<option value="byPopularity">Most Popular First</option>
						</select>
					</div>
				</div>
				<div className="form-group">
					<label className="label-control" htmlFor="dateRange">Default date range</label>
					<div className="form-control">
						<select id="dateRange" ng-model="settings.defaultDateRange"
						        className="ng-pristine ng-untouched ng-valid ng-not-empty">
							<option value="last24h">Last 24h</option>
							<option value="pastWeek">Past Week</option>
							<option value="pastMonth">Past Month</option>
							<option value="pastYear">Past Year</option>
							<option value="all">Forever</option>
						</select>
					</div>
				</div>
				<div className="form-group">
					<label className="label-control" htmlFor="storyText">Use the story text for the search</label>
					<div className="form-control">
						<input className="form-control ng-pristine ng-untouched ng-valid ng-not-empty" id="storyText"
						       ng-model="settings.storyText" type="checkbox"/>
					</div>
				</div>
				<div className="form-group">
					<label className="label-control" htmlFor="authorText">Use the author's username for the
						search</label>
					<div className="form-control">
						<input className="form-control ng-pristine ng-untouched ng-valid ng-not-empty" id="authorText"
						       ng-model="settings.authorText" type="checkbox"/>
					</div>
				</div>
				<div className="form-group">
					<label className="label-control" htmlFor="typoTolerance">Typo-tolerance</label>
					<div className="form-control">
						<input className="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
						       id="typoTolerance" ng-model="settings.typoTolerance" type="checkbox"/>
					</div>
				</div>
			</fieldset>
		</section>
	)
}