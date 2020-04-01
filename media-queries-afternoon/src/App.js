import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      mobileMenuOpen: false
    }
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)

  }
  toggleMobileMenu(){
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
    })
  }
  render(){
    return(
      <div className="App">
        <header className="header"> 
          <h1>Start Bootstrap</h1>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">Services</li>
              <li className="nav-item">Portfolio</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Team</li>
              <li className="nav-item">Contact</li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default App;
