import React, { Component } from "react";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>test</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
