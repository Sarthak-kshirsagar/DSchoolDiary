import React from 'react';
import './style.css';
const Intro = () => {
  return (
    <div className="intro">
      <div className="introHead">
        <p className="mainHead">Stay Connected, Stay Informed</p>
        <p className="shortDesc">
          [App Name] is a powerful platform designed to bridge the communication gap between schools and families. 
          From real-time updates to academic progress tracking, we ensure parents are always informed and involved. 
          With features like attendance monitoring, event notifications, and secure class-wise chats, we make 
          collaboration effortless. Empowering education through technology, one connection at a time.
        </p>
      </div>
      <div className="mockupImage">
        <img src="/iphone-multiple-screens-mockup.png" alt="App Mockup" />
      </div>
    </div>
  );
};

export default Intro;
