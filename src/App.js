import React from 'react';
import NiceHeader from './NiceHeader.js';
import Main from './Main.js';
import Recipe from './Recipe.js';


export default class App extends React.Component {
  render() {

    return (
      <div>
        <NiceHeader />
        <Main />
        <Recipe />
      </div>
    )
  }
}
