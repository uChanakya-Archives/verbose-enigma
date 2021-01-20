import React from "react";
import { RedditSavedPostsJson, redditData } from "../app/interfaces";

import "../styles/cards.css";

class Card extends React.Component<{ data: redditData }, {}> {
  render() {
    const dataX = this.props.data;
    return (
      <div className="post_card">
        <h5>{dataX.data.subreddit_name_prefixed}</h5>
        <p>{dataX.data.title}</p>
      </div>
    );
  }
}

class RenderCards extends React.Component<{ jsonFile: RedditSavedPostsJson }, {}> {
  render() {
    let NoOfCards = this.props.jsonFile.data.dist;
    let cards: JSX.Element[] = [];
    for (let i = 0; i < NoOfCards; i++) {
      const cardData = this.props.jsonFile.data.children[i];
      cards.push(<Card data={cardData} />);
    }
    return <div className="AlltheCards">{cards}</div>;
  }
}

export default RenderCards;
/*
- title
- subreddit name
- upvotes and downvotes
- post URL
- no of comments
- archived or not

-permalink
*/
