import React from 'react';
import './Navigation.css';

export const Navigation = () => {
  return(
    <nav>
      <span className="title nav-component">tweeter</span>
      <div id="new-tweet-button" className="nav-component">
        <span><strong>Write</strong> a new tweet</span>
        <i className="arrow down"></i>
        <i className="arrow down"></i>
      </div>
    </nav>
  );
};