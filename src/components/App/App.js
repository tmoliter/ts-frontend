import React, { PureComponent } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import {Card, Lede, Headline } from '../Card/Card'
export class App extends PureComponent {

  render() {
    return (  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <Card>
        <Headline text="This is the Headline" />
        <Lede author="Jeffy Spaghetti" text="This is the lede." />
      </Card>
      </div>
    );  
  }
}