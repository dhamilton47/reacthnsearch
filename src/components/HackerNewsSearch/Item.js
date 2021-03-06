import React, { Component } from 'react';
import { ItemAuthor } from "./ItemAuthor";
import { ItemCommentCount } from "./ItemCommentCount";
import { ItemLikesCount } from "./ItemLikesCount";
import { ItemSourceLink } from "./ItemSourceLink";
import { ItemPosted } from "./ItemPosted";
import { ItemTitle } from "./ItemTitle";
import { ItemStarred } from "./ItemStarred";
import { ShowStoryText } from "./ShowStoryText";
import { ShowCommentText } from "./ShowCommentText";
import { makePlural } from "./Utils";

import {settings, state} from './DataForSettings';
//TODO: pass these in as props
class Item extends Component {
	//TODO: Investigate the need for these methods
	cleanup() {}
	clickHit() {}
	gotoHit() {}
	isStarred() {}
	loadComments() {}
	toggleStar() {}
	render() {
		//TODO: work this out
		{/*
			<div className={ "item item_"+ this.props.story.objectID + (story[this.props.story.objectID] ? " item-show-comment" : "") }
			     ng-click="clickHit(this.props.story.objectID, $index + 1)"
			>
		*/}

		return (
			<div className={ "item item_"+ this.props.story.objectID }
			     onClick={this.clickHit(this.props.story.objectID)}
			>
				<div className="item-main">
					<div className="item-content-wrapper">
						{
							settings.showThumbnails && settings.style !== "default" && this.props.story._tags[0] === "story" && state !== "ask-hn" && state !== "polls"
								? null : null
						}
						<div className="item-title-and-infos">
							<ItemTitle story={this.props.story}/>

							<ul className="item-infos list-inline">
								{
									this.props.story.points
										? <ItemLikesCount story={this.props.story}/>
										: null
								}

								<ItemAuthor story={this.props.story}/>

								<ItemPosted story={this.props.story}/>

								{
									settings.style === "default"
										? <ItemCommentCount story={this.props.story}/>
										: null
								}

								{
									this.props.story.url
										? <ItemSourceLink story={this.props.story}/>
										: null
								}

							</ul>
						</div>
						{
							this.props.story.comment_text && this.props.story._tags[0] === "comment"
								? <ShowStoryText story={this.props.story} cleanup={this.cleanup}/>
								: null
						}

						{
							this.props.story.story_text && (this.props.story._tags[0] === "story" || this.props.story._tags[0] === "job")
								? <ShowCommentText story={this.props.story} cleanup={this.cleanup}/>
								:null
						}

					</div>
					{
						this.props.story._tags[0] === "story" || this.props.story._tags[0] === "poll" || this.props.story._tags[0] === "job"
							?<div className="item-actions">
								<ul className="list-inline">
									{
										state !== "jobs"
											? <li className="action-toggle-comments">
												<i className="icon-speech-bubble" />

												{/*
													TODO: research this
													bo-href={ "/story/" + this.props.story.objectID + "/" + this.props.story.title) }
												*/}
												{
													this.props.story.num_comments > 0
														? <a
															className="comments-bubble"
															onClick={ this.loadComments(this.props.story.objectID) }
															href={this.props.story.url}
														>
															{this.props.story.num_comments } comment{ makePlural(this.props.story.num_comments)}
														</a>
														:null
												}

												{
													this.props.story.num_comments === 0
														? <span className="comments-bubble no-comments" style={{ display: "none" }}/>
														:null
												}
											</li>
											:null
									}

									<li className="action-share">
										<a className="placeholder">
											<i className="icon-share"/>
										</a>

									</li>
									{
										state !== "jobs"
											? <ItemStarred onClick={this.toggleStar(this.props.story.objectID)}/>
											: null
									}
								</ul>
							</div>
							:null
					}
				</div>
				{/*
				TODO: research this
				<!-- ngIf: story[hit.objectID] --> */}
				<div className="item-clearfix"/>
			</div>
		)
	}
}

export default Item;