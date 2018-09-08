import React, { Component } from 'react';
import HeaderComponent from './components/Header/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="section header-section">
            <div className="section-container header-component">
              <HeaderComponent></HeaderComponent>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
