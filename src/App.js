import React, { Component } from 'react';
import Main from './components/main';
import Footer from './components/footer';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main />
        <Footer />
        </React.Fragment>

     
    );
  }
}

export default App;

