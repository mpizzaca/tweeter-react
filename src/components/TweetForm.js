import React, { useState } from 'react';
import './TweetForm.css';

export const TweetForm = props => {
  const { addNewTweet } = props;
  const [tweetText, setTweetText] = useState('');
  const tweetRemainingLength = 140 - tweetText.length;
  const outputStyle = { color: tweetRemainingLength >= 0 ? 'black' : 'red' };

  const submitTweet = event => {
    event.preventDefault();

    if (tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText);
      setTweetText('');
    }
  }

  return(
    <section className="new-tweet">
      <form onSubmit={submitTweet}>
        <label htmlFor="tweet-text">What are you humming about?</label>
        <textarea value={tweetText} onChange={event => setTweetText(event.target.value)} name="text" id="tweet-text"></textarea>
        <div>
          <button id="tweet-button" type="submit">Tweet</button>
          <output style={outputStyle} name="counter" className="counter" htmlFor="tweet-text">{tweetRemainingLength}</output>
        </div>
        <label className="error" htmlFor="tweet-text"></label>
      </form>
    </section>
  );
};