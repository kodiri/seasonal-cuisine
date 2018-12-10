import React, { Component } from "react";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>this is the page</main>
        <Footer />
      </div>
    );
  }
}

export default App;
