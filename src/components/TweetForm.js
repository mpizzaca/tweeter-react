import React from 'react';
import './TweetForm.css';

export const TweetForm = () => {
  return(
    <section className="new-tweet">
      <form>
        <label htmlFor="tweet-text">What are you humming about?</label>
        <textarea name="text" id="tweet-text"></textarea>
        <div>
          <button id="tweet-button" type="submit">Tweet</button>
          <output name="counter" className="counter" htmlFor="tweet-text">140</output>
        </div>
        <label className="error" htmlFor="tweet-text"></label>
      </form>
    </section>
  );
};