import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./../Header/Header";
import Routes from "./../Routes";
import Footer from "./../Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
