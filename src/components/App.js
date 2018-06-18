import React, { Component } from 'react';
import './App.css';
import ProfileList from './ProfileList'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
    <div className="app-container">
      <Navbar />
        <div className="profilelist-container">
          <ProfileList />
        </div>
    </div>
    );
  }
}

export default App;

App.defaultProps = {
    name: "",
    position: "",
    profile: "img",
    background: ""
  };
