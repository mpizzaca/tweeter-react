import React, { useState } from 'react';
import moment from 'moment';
import './App.css';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';
import { TweetForm } from './components/TweetForm';
import { Tweet } from './components/Tweet';

const initialTweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1617803214370
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1617889614370
  },
  {
    "user": {
      "name": "Einstein",
      "avatars": "https://i.imgur.com/ilT4JDe.png",
      "handle": "@albertE"
    },
    "content": {
      "text": "All generalizations are false, including this one."
    },
    "created_at": 1617976014370
  },
  {
    "user": {
      "name": "Curie",
      "avatars": "https://i.imgur.com/lRUnDgU.png",
      "handle": "@curieous"
    },
    "content": {
      "text": "I was taught that the way of progress is neither swift nor easy."
    },
    "created_at": 1618062414370
  }
];

function App() {
  const [tweetData, setTweetData] = useState(initialTweetData);

  const tweets = tweetData.sort((a, b) => b.created_at - a.created_at).map((tweetData, index) => {
    return <Tweet
    key={index}
    name={tweetData.user.name}
    avatar={tweetData.user.avatars}
    handle={tweetData.user.handle}
    text={tweetData.content.text}
    date={Date(tweetData.created_at).toLocaleString()}
    age={moment(tweetData.created_at).fromNow()}
    />
  });

  const addNewTweet = text => {
    const newTweet = {
      "user": {
        "name": "Mitchell",
        "avatars": "https://i.imgur.com/ilT4JDe.png",
        "handle": "@mpizzaca"
      },
      "content": {
        "text": text
      },
      "created_at": Date.now()
    };

    setTweetData([newTweet, ...tweetData]);
  };

  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
        <TweetForm addNewTweet={addNewTweet} />
        <section className='tweets'>
          {tweets}
        </section>
      </main>
    </div>
  );
};

export default App;
