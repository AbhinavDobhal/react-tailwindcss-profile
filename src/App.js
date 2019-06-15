import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import Footer from './components/footer';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <React.Fragment> 
      <Header />
        <div class="flex-grow">
        <Main />
        </div>
        <Footer />
        </React.Fragment>
    );
  }
}

export default App;

