import React from "react";
//TODO: enforce consistent coding style
export function SectionHelp() {
	return (
		<section className="page">
			<h3>Advanced search syntax</h3>
			<ul>
				<li>Use <code>"</code> to match a particular sequence of terms <code>"search engine"</code>,</li>
				<li>Use <code>-</code> to ensure a word won't appear in the result set <code>search -optimization</code>,</li>
				<li>Use <code>author:USERNAME</code> or <code>by:USERNAME</code> to filter by author,</li>
				<li>Use <code>story:ID</code> to filter by story,</li>
				<li>Use <code>points&gt;NUMBER</code> or <code>points&lt;NUMBER</code> to filter by points,</li>
				<li>Use <code>comments&gt;NUMBER</code> or <code>comments&lt;NUMBER</code> to filter by number of comments,</li>
				<li>Use <code>date&gt;TIMESTAMP</code> or <code>date&lt;TIMESTAMP</code> to filter by date.</li>
			</ul>
		</section>
	)
}