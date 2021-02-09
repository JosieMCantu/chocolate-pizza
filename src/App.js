import React from 'react';
import NiceHeader from './NiceHeader.js';
import Main from './Main.js';
import Recipe from './Recipe.js';
import Footer from './Footer.js';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <NiceHeader />
        <Main />
        <Recipe />
        <Footer />
      </div>
    )
  }
}
