import React from 'react';
import './Tweet.css';

export const Tweet = props => {

  const { name, avatar, handle, text, date, age } = props;

  return (
    <article>
      <header>
        <div>
          <img className="profile-pic" src={avatar} />
          <h3>{name}</h3>
        </div>
        <h3>{handle}</h3>
      </header>
      <p className="tweet-text">{text}</p>
      <footer>
        <span title={date}>{age}</span>
        <div>
          <img src="/flag.png" />
          <img src="/retweet.png" />
          <img src="/heart.png" />
        </div>
      </footer>
    </article>
  );
};