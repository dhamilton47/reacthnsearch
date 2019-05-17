import {Items} from "./Items";
//TODO: Bring in as props
import {results, settings, state} from "./DataForSettings";
import * as PropTypes from "prop-types";
import React from "react";
import PaginationContainer from "./PaginationContainer";

//TODO: write functions
const widerDateRange = (e) => {};
const searchAllItems =  (e) => {};
const selectInput = (e) => {};
//TODO: enforce consistent coding style
export function MainContentHome(props) {
	return <section>
		<Items results={results}/>

		{
			results.hits.length === 0 && state === "starred" && settings.dateRange === "all"
				? <div className="no-results text-center hide">
					<p>You don't have any starred items.</p>
				</div>
				: null
		}

		{
			results.hits.length === 0 && state === "starred" && settings.dateRange !== "all"
				? <div className="no-results text-center hide">
					<p>You don't have any starred items <strong>for this period</strong>.</p>
				</div>
				: null
		}

		{
			results.hits.length === 0 && state !== "starred"
				? <div className="no-results hide">
					<p>
						No
						{settings.type === "all" ? <strong className="hide">items</strong> : null}
						{settings.type === "story" ? <strong>stories</strong> : null}
						{settings.type === "comment" ? <strong className="hide">comments</strong> : null}
						{state === "user" ? <span className="hide">by <strong><code/></strong></span> : null}

						{
							props.query
								? <span className="hide">
									matching
									<strong className="ng-binding">
										{state === "ask-hn" ? <span className="hide">Ask HN:</span> : null}
										{state === "show-hn" ? <span className="hide">Show HN:</span> : null}
										{state === "jobs" ? <span className="hide">Jobs:</span> : null}
										{state === "polls" ? <span className="hide">Polls:</span> : null}
										{state === "hot" ? <span className="hide">Hot:</span> : null}
									</strong>
								</span>
								: null
						}

						{
							settings.dateRange !== "all"
								? <span className="hide">
									in the
									{settings.dateRange === "last24h" ? <strong className="hide">last 24 hours</strong> : null}
									{settings.dateRange === "pastWeek" ? <strong className="hide">past week</strong> : null}
									{settings.dateRange === "pastMonth" ? <strong className="hide">past month</strong> : null}
									{settings.dateRange === "pastYear" ? <strong className="hide">past year</strong> : null}
								</span>
								: null}

					</p>
					{
						props.query || settings.dateRange !== "all" || settings.type !== "all"
							? <div>
								<p>Suggestions:</p>
								<ul>
									{
										props.query
											? <li className="hide">
												{/* eslint-disable-next-line */}
												<a href="#" onClick={selectInput}>Try different keywords.</a>
											</li>
											: null
									}

									{settings.dateRange !== "all"
										? <li className="hide">
											{/* eslint-disable-next-line */}
											<a href="#" onClick={widerDateRange}>Try a wider date range.</a>
										</li>
										: null}

									{
										settings.type !== "all"
											? <li>
												{/* eslint-disable-next-line */}
												<a href="#" onClick={searchAllItems}>
													Search also for {settings.type === "story" ? <span>comments</span> : null}
												</a>
											</li>
											: null
									}
								</ul>
								<div className="spacer2"/>
								<p>
									Or try popular queries:
									<br/>

									{/*
										TODO: research this
										<!-- ngRepeat: p in populars -->
									*/}
								</p>
							</div>
							: null
					}
				</div>
				: null
		}

		<PaginationContainer/>

	</section>;
}

MainContentHome.propTypes = {query: PropTypes.bool};