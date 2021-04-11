import React from 'react';
import './Profile.css';

export const Profile = () => {
  return(
    <header>
      <div>
        <img src="/profile-hex.png" />
      </div>
      <br />
      <div>
        <h2><span className="profile--bold">Mitchell</span> Pizzacalla</h2>
      </div>
    </header>
  );
};