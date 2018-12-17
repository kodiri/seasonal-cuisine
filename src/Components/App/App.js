import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import Header from "./../Header/Header";
import Routes from "./../Routes";
import Footer from "./../Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Header />
            <main>
              <Routes />
            </main>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
