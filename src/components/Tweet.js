import React from 'react';
import './Tweet.css';

export const Tweet = () => {
  return (
    <article>
      <header>
        <div>
          <img className="profile-pic" src="https://i.imgur.com/lRUnDgU.png" />
          <h3>Curie</h3>
        </div>
        <h3>@curieous</h3>
      </header>
      <p className="tweet-text">I was taught that the way of progress is neither swift nor easy.</p>
      <footer>
        <span title="Fri Apr 09 2021 13:55:15 GMT-0400 (Eastern Daylight Time)">1 day ago</span>
        <div>
          <img src="images/flag.png" />
          <img src="images/retweet.png" />
          <img src="images/heart.png" />
        </div>
      </footer>
    </article>
  );
};