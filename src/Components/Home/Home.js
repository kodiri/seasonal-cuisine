import React, { Component } from "react";
import Hero from "./Hero.js";
import Recipes from "./../../testing-data/Data";
import Recipe from "./Recipes/Recipe";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 15,
      currentCount: 3,
      offset: 3,
      list: [],
      isFetching: false
    };
  }

  componentWillMount() {
    this.loadInitialContent();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.loadOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.loadOnScroll);
  }

  render() {
    return (
      <div>
        <Hero />
        <div className="background">
          <div className="flex-grid">
            {this.state.list.map((recipe, index) => (
              <div key={index}>
                <Recipe
                  id2={recipe.id}
                  title2={recipe.title}
                  country2={recipe.country}
                  image2={recipe.image}
                />
              </div>
            ))}
            {this.state.currentCount !== this.state.total ? (
              <div id="content-end" onClick={e => this.forceLoadOnScroll()} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  loadOnScroll = e => {
    if (this.state.currentCount === this.state.total) return;
    var el = document.getElementById("content-end");
    var rect = el.getBoundingClientRect();
    var isAtEnd =
      // rect.top >= 0 &&
      // rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight); /*or $(window).height() */
    if (isAtEnd) {
      //User at the end of content. load more content
      if (!this.state.isFetching) {
        this.setState({ isFetching: true });

        //get content from server
        setTimeout(() => {
          var count = this.state.currentCount + this.state.offset;
          if (this.state.currentCount !== this.state.total) {
            this.setState({
              isFetching: false,
              currentCount: count,
              list: Recipes.slice(0, count)
            });
          }
        }, 500);
      }
    }
  };

  loadInitialContent() {
    //Get content from server using your preferred method (like AJAX, relay)
    let ary = Recipes.slice(0, this.state.offset);
    this.setState({ list: ary });
  }
}

export default Home;
