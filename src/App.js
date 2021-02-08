import React from 'react';
import NiceHeader from './NiceHeader.js';
import Main from './Main.js';
  
export default class App extends React.Component {
  render() {
    return (
      <div>
        <NiceHeader></NiceHeader>
        <Main></Main>
      </div>
    )
  }
}
