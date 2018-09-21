import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer.js'

class App extends Component {

  render() {
    return (
      <div className="App">
          < Nav />
          <PigContainer pigData={hogs} />

      </div>
    )
  }
}

export default App;
