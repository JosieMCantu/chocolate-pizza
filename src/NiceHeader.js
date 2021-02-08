import React from 'react';
import './App.css';

export default class NiceHeader extends React.Component {
    render() {
      return (
        <header>
          <img alt="small logo" src="small-logo.png" />
          <div className="class-logo">
            <p className="delicious">Delicious</p>
            <p>THE BEST FOOD BLOG ON THE WEB</p>
          </div>
          <div className="header-icons">
            <img alt="fabcebook" src="fb-icon.png" />
            <img alt="twitter" src="twit-icon.png" />
            <img alt="google" src="gp-icon.png" />
            <img alt="instagram" src="insta-icon.png" />
            <img alt="flicker" src="flic-icon.png" />
            <img alt="pinterst" src="pint-icon.png" />
            <img alt="rss" src="rss-icon.png" />
            <img alt="email" src="mail-icon.png" />
          </div>
        </header>
      )
    }
  }
  