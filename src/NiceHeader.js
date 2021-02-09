import React from 'react';
import './App.css';

export default class NiceHeader extends React.Component {
    render() {
      return (
        <header>
          <img className='top-logo' alt="small logo" src="small-logo.png" />
          <div className="class-logo">
            <p className="delicious">Delicious</p>
            <p className='delicious-sub'>THE BEST FOOD BLOG ON THE WEB</p>
          </div>
          <div className="header-icons">
            <img alt="fabcebook" className='icons' src="fb-icon.png" />
            <img alt="twitter" className='icons' src="twit-icon.png" />
            <img alt="google" className='icons' src="gp-icon.png" />
            <img alt="instagram" className='icons' src="insta-icon.png" />
            <img alt="flicker" className='icons' src="flic-icon.png" />
            <img alt="pinterst" className='icons' src="pint-icon.png" />
            <img alt="rss" className='icons' src="rss-icon.png" />
            <img alt="email" className='icons' src="mail-icon.png" />
          </div>
        </header>
      )
    }
  }
  