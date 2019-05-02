import React from "react";

export function SectionApi() {
	return (
		<section className="page api-doc">
			<p>This API is built on top of <a href="https://www.algolia.com">Algolia Search's API</a>. It enables
				developers to access HN data programmatically using a REST API. This documentation describes how to
				request data from the API and how to interpret the response.</p>
			<p className="text-center">
				<strong>To search Hacker News, go back to <a href="/">the home page</a>.</strong>
			</p>
			<br/>
				<div className="panel">
					<h2>Items</h2>
					<p>
						<span className="label-get">GET</span>
						<code>http://hn.algolia.com/api/v1/items/:id</code>
					</p>
					<pre>
						<div id="json">
							<div className="collapser"/>&#123;<span className="ellipsis"/>
							< ul className="obj collapsible">
								<li>
									<div className="hoverable"><span className="property">id</span>: <span className="type-number">1</span>,</div>
								</li>
								<li>
									<div className="hoverable"><span className="property">created_at</span>: <span className="type-string">"2006-10-09T18:21:51.000Z"</span>,</div>
								</li>
								<li>
									<div className="hoverable"><span className="property">author</span>: <span className="type-string">"pg"</span>,
									</div>
								</li>
								<li>
									<div className="hoverable"><span className="property">title</span>: <span className="type-string">"Y Combinator"</span>,</div>
								</li>
								<li>
									<div className="hoverable"><span className="property">url</span>: <span className="type-string">"</span><a href="http://ycombinator.com">http://ycombinator.com</a><span className="type-string">"</span>,</div>
								</li>
								<li>
									<div className="hoverable"><span className="property">text</span>: <span className="type-null">null</span>,</div>
								</li>
								<li>
									<div className="hoverable"><span className="property">points</span>: <span className="type-number">57</span>,</div>
								</li>
								<li>
									<div className="hoverable"><span className="property">parent_id</span>: <span className="type-null">null</span>,</div>
								</li>
								<li>
									<div className="hoverable"><span className="property">children</span>:
										<div className="collapser"/>&#91;<span className="ellipsis"/>
										<ul className="array collapsible">
											<li>
												<div className="hoverable">
													<div className="collapser"/>&#123;<span className="ellipsis"/>
													<ul className="obj collapsible">
														<li><div className="hoverable"><span className="property">id</span>: <span className="type-number">15</span>,</div></li>
														<li><div className="hoverable"><span className="property">created_at</span>: <span className="type-string">"2006-10-09T19:51:01.000Z"</span>,</div></li>
														<li><div className="hoverable"><span className="property">author</span>: <span className="type-string">"sama"</span>,</div></li>
														<li><div className="hoverable"><span className="property">text</span>: <span className="type-string">"&amp;#34;the rising star of venture capital&amp;#34; -unknown VC eating lunch on SHR"</span>,</div></li>
														<li><div className="hoverable"><span className="property">points</span>: <span className="type-number">5</span>,</div></li>
														<li><div className="hoverable"><span className="property">parent_id</span>: <span className="type-number">1</span>,</div></li>
														<li>
															<div className="hoverable"><span className="property">children</span>:
																<div className="collapser"/>&#91;<span className="ellipsis"/>
																	<ul className="array collapsible">
																		<li>
																			<div className="hoverable">
																				<div className="collapser"/>&#123;<span className="ellipsis"/>
																				<ul className="obj collapsible">
																					<li><div className="hoverable"><span className="property">id</span>: <span className="type-number">17</span>,</div></li>
																					<li><div className="hoverable"><span className="property">created_at</span>: <span className="type-string">"2006-10-09T19:52:45.000Z"</span>,</div></li>
																					<li><div className="hoverable"><span className="property">author</span>: <span className="type-string">"pg"</span>,</div></li>
																					<li><div className="hoverable"><span className="property">text</span>: <span className="type-string">"Is there anywhere to eat on Sandhill Road?"</span>,</div></li>
																					<li><div className="hoverable"><span className="property">points</span>: <span className="type-number">5</span>,</div></li>
																					<li><div className="hoverable"><span className="property">parent_id</span>: <span className="type-number">15</span>,</div></li>
																					<li><div className="hoverable"><span className="property">children</span>: [ ]</div></li>
																				</ul>
																				&#125;
																			</div>
																		</li>
																	</ul>
															&#93;
															</div>
														</li>
													</ul>
													&#125;
												</div>
											</li>
										</ul>
										&#93;
									</div>
								</li>
							</ul>
							&#125;
						</div>
					</pre>
				</div>
				<div className="panel">
					<h2>Users</h2>
					<p>
						<span className="label-get">GET</span>
						<code>http://hn.algolia.com/api/v1/users/:username</code>
					</p>
					<pre>
						<div id="json">&#123;<span className="ellipsis"/>
						<ul className="obj collapsible">
							<li>
								<div className="hoverable"><span className="property">username</span>: <span className="type-string">"pg"</span>,</div>
							</li>
							<li>
								<div className="hoverable"><span className="property">about</span>: <span className="type-string">"PG's bio"</span>,</div>
							</li>
							<li>
								<div className="hoverable"><span className="property">karma</span>: <span className="type-string">99999</span></div>
							</li>
						</ul>
						&#125;
						</div>
					</pre>
				</div>
				<div className="panel">
					<h2>Search</h2>
					<h3>Sorted by relevance, then points, then number of comments</h3>
					<p>
						<span className="label-get">GET</span>
						<code>http://hn.algolia.com/api/v1/search?query=...</code>
					</p>
					<h3>Sorted by date, more recent first</h3>
					<p>
						<span className="label-get">GET</span>
						<code>http://hn.algolia.com/api/v1/search_by_date?query=...</code>
					</p>

					<table>
						<tbody>
						<tr>
							<th style={{width:"25%"}}>Parameter</th>
							<th>Description</th>
							<th style={{width:"15%"}}>Type</th>
						</tr>
						<tr>
							<td><code>query=</code></td>
							<td>full-text query</td>
							<td>String</td>
						</tr>
						<tr>
							<td><code>tags=</code></td>
							<td>filter on a specific tag. Available tags:
								<ul>
									<li><code>story</code></li>
									<li><code>comment</code></li>
									<li><code>poll</code></li>
									<li><code>pollopt</code></li>
									<li><code>show_hn</code></li>
									<li><code>ask_hn</code></li>
									<li><code>front_page</code></li>
									<li><code>author_:USERNAME</code></li>
									<li><code>story_:ID</code></li>
								</ul>
							</td>
							<td>String</td>
						</tr>
						<tr>
							<td><code>numericFilters=</code></td>
							<td>filter on a specific numerical condition (<code>&lt;</code>, <code>&lt;=</code>, <code>=</code>, <code>&gt;</code> or <code>&gt;=</code>).
								<br/>
								Available numerical fields:
								<ul>
									<li><code>created_at_i</code></li>
									<li><code>points</code></li>
									<li><code>num_comments</code></li>
								</ul>
							</td>
							<td>String</td>
						</tr>
						<tr>
							<td><code>page=</code></td>
							<td>page number</td>
							<td>Integer</td>
						</tr>
						</tbody>
					</table>
					<br/>
					<p>Tags are ANDed by default, can be ORed if between parenthesis. For example <code>author_pg,(story,poll)</code> filters on <code>author=pg AND (type=story OR type=poll)</code>.</p>
					<p>By default a limited number of results are returned in each page, so a given query may be broken over dozens of pages. The number of results and page number are available as the variables <code>nbPages</code> and <code>hitsPerPage</code> respectively; they can be specified as arguments in requests, allowing for more results to be requested or iteration over the available pages eg appending to the search URL parameters like <code>&amp;page=2</code> or <code>hitsPerPage=50</code>.</p>
					<p>The complete list of search parameters is available in Algolia <a href="https://www.algolia.com/doc/rest_api#QueryIndex">Search API documentation</a>.</p>
					<h3>Examples</h3>
					<dl>
						<dt>All stories matching <code>foo</code></dt>
						<dd><code>http://hn.algolia.com/api/v1/search?query=foo&amp;tags=story</code></dd>
						<dt>All comments matching <code>bar</code></dt>
						<dd><code>http://hn.algolia.com/api/v1/search?query=bar&amp;tags=comment</code></dd>
						<dt>All URLs matching <code>bar</code></dt>
						<dd><code>http://hn.algolia.com/api/v1/search?query=bar&amp;restrictSearchableAttributes=url</code></dd>
						<dt>All stories that are on the front/home page right now</dt>
						<dd><code>http://hn.algolia.com/api/v1/search?tags=front_page</code></dd>
						<dt>Last stories</dt>
						<dd><code>http://hn.algolia.com/api/v1/search_by_date?tags=story</code></dd>
						<dt>Last stories OR polls</dt>
						<dd><code>http://hn.algolia.com/api/v1/search_by_date?tags=(story,poll)</code></dd>
						<dt>Comments since timestamp <code>X</code> (in second)</dt>
						<dd><code>http://hn.algolia.com/api/v1/search_by_date?tags=comment&amp;numericFilters=created_at_i&gt;X</code></dd>
						<dt>Stories between timestamp <code>X</code> and timestamp <code>Y</code> (in second)</dt>
						<dd><code>http://hn.algolia.com/api/v1/search_by_date?tags=story&amp;numericFilters=created_at_i&gt;X,created_at_i&lt;Y</code></dd>
						<dt>Stories of <code>pg</code></dt>
						<dd><code>http://hn.algolia.com/api/v1/search?tags=story,author_pg</code></dd>
						<dt>Comments of story <code>X</code></dt>
						<dd><code>http://hn.algolia.com/api/v1/search?tags=comment,story_X</code></dd>
					</dl>
					<pre>
						<div id="json">
							<div className="collapser"/>&#123;<span className="ellipsis"/>
							<ul className="obj collapsible">
								<li>
									<div className="hoverable"><span className="property">hits</span>:
										<div className="collapser"/>&#91;<span className="ellipsis"/>
										<ul className="array collapsible">
											<li>
												<div className="hoverable">
													<div className="collapser"/>&#123;<span className="ellipsis"/>
													<ul className="obj collapsible">
														<li>
															<div className="hoverable"><span className="property">title</span>: <span className="type-string">"Y Combinator"</span>,</div>
														</li>
														<li>
															<div className="hoverable"><span className="property">url</span>: <span className="type-string">"</span><a href="http://ycombinator.com">http://ycombinator.com</a><span className="type-string">"</span>,</div>
														</li>
														<li>
															<div className="hoverable"><span className="property">author</span>: <span className="type-string">"pg"</span>,</div>
														</li>
														<li>
															<div className="hoverable"><span className="property">points</span>: <span className="type-number">57</span>,</div>
														</li>
														<li>
															<div className="hoverable"><span className="property">story_text</span>: <span className="type-null">null</span>,</div>
														</li>
														<li>
															<div className="hoverable"><span className="property">comment_text</span>: <span className="type-null">null</span>,</div>
														</li>
														<li>
															<div className="hoverable"><span className="property">_tags</span>:
																<div className="collapser"/>&#91;<span className="ellipsis"/>
																<ul className="array collapsible">
																	<li>
																		<div className="hoverable"><span className="type-string">"story"</span></div>
																	</li>
																</ul>
																&#93;,
															</div>
														</li>
														<li>
															<div className="hoverable"><span className="property">num_comments</span>: <span className="type-number">2</span>,</div>
														</li>
														<li>
															<div className="hoverable"><span className="property">objectID</span>: <span className="type-string">"1"</span>,</div>
														</li>
														<li>
															<div className="hoverable"><span className="property">_highlightResult</span>:
																<div className="collapser"/>&#123;<span className="ellipsis"/>
																<ul className="obj collapsible">
																	<li>
																		<div className="hoverable"><span className="property">title</span>:
																			<div className="collapser"/>&#123;<span className="ellipsis"/>
																			<ul className="obj collapsible">
																				<li>
																					<div className="hoverable"><span className="property">value</span>: <span className="type-string">"Y Combinator"</span>,</div>
																				</li>
																				<li>
																					<div className="hoverable"><span className="property">matchLevel</span>: <span className="type-string">"none"</span>,</div>
																				</li>
																				<li>
																					<div className="hoverable"><span className="property">matchedWords</span>: &#91; &#93;</div>
																				</li>
																			</ul>
																			&#125;,
																		</div>
																	</li>
																	<li>
																		<div className="hoverable"><span className="property">url</span>:
																			<div className="collapser"/>&#123;<span className="ellipsis"/>
																			<ul className="obj collapsible">
																				<li>
																					<div className="hoverable"><span className="property">value</span>: <span className="type-string">"</span><a href="http://ycombinator.com">http://ycombinator.com</a><span className="type-string">"</span>,</div>
																				</li>
																				<li>
																					<div className="hoverable"><span className="property">matchLevel</span>: <span className="type-string">"none"</span>,</div>
																				</li>
																				<li>
																					<div className="hoverable"><span className="property">matchedWords</span>: &#91; &#93;</div>
																				</li>
																			</ul>
																			&#125;,
																		</div>
																	</li>
																	<li>
																		<div className="hoverable"><span className="property">author</span>:
																			<div className="collapser"/>&#123;<span className="ellipsis"/>
																			<ul className="obj collapsible">
																				<li>
																					<div className="hoverable"><span className="property">value</span>: <span className="type-string">"&lt;em&gt;pg&lt;/em&gt;"</span>,</div>
																				</li>
																				<li>
																					<div className="hoverable"><span className="property">matchLevel</span>: <span className="type-string">"full"</span>,</div>
																				</li>
																				<li>
																					<div className="hoverable"><span className="property">matchedWords</span>:
																						<div className="collapser"/>&#91;<span className="ellipsis"/>
																						<ul className="array collapsible">
																							<li>
																								<div className="hoverable"><span className="type-string">"pg"</span></div>
																							</li>
																						</ul>
																						&#93;
																					</div>
																				</li>
																			</ul>
																			&#125;
																		</div>
																	</li>
																</ul>
																&#125;
															</div>
														</li>
													</ul>
													&#125;,
													&#91;...&#93;
												</div>
											</li>
										</ul>
										&#93;,
									</div>
								</li>
								<li>
									<div className="hoverable"><span className="property">page</span>: <span className="type-number">0</span>,</div>
								</li>
								<li>
									<div className="hoverable"><span className="property">nbHits</span>: <span className="type-number">11</span>,</div>
								</li>
								<li>
									<div className="hoverable"><span className="property">nbPages</span>: <span className="type-number">1</span>,</div>
								</li>
								<li>
									<div className="hoverable"><span className="property">hitsPerPage</span>: <span className="type-number">20</span>,</div>
								</li>
								<li>
									<div className="hoverable"><span className="property">processingTimeMS</span>: <span className="type-number">1</span>,</div>
								</li>
								<li><div className="hoverable"><span className="property">query</span>: <span className="type-string">"pg"</span>,</div>
								</li>
								<li>
									<div className="hoverable"><span className="property">params</span>: <span className="type-string">"query=pg"</span></div>
								</li>
							</ul>
							&#125;
						</div>
					</pre>
				</div>


			<div className="panel">
				<h2>Rate limits</h2>
				<p>We are limiting the number of API requests from a single IP to 10,000 per hour. If you or your application has been blacklisted and you think there has been an error, please <a encode="javascript" href="mailto:support@algolia.com?subject=HN%20Search%3A%20rate%20limit">contact us</a>.</p>
			</div>
		</section>
	)
}