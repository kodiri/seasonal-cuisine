import React, { Component } from "react";
import Hero from "./Hero.js";
import Recipes from "./../../testing-data/Data";
import Recipe from "./Recipes/Recipe";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        country: '',
        course: '',
        restrictions: ''
      }
    };
  }

  updateCountry(country) {
    let filters = this.state.filters;
    filters.country = country;
    this.setState({ filters }, () => { console.log(this.state.filters) });
  }
  updateCourse(course) {
    let filters = this.state.filters;
    filters.course = course;
    this.setState({ filters }, () => { console.log(this.state.filters) });
  }
  updateRestrictions(restrictions) {
    let filters = this.state.filters;
    filters.restrictions = restrictions;
    this.setState({ filters }, () => { console.log(this.state.filters) });
  }

  getFilteredRecipes() {
    return Recipes
      .filter(recipe =>
        this.state.filters.country ?
          recipe.country === this.state.filters.country :
          true) //country filter
      .filter(recipe =>
        this.state.filters.course ?
          recipe.course === this.state.filters.course :
          true) //course filter
      .filter(recipe => {
        return this.state.filters.restrictions ?
          recipe.dietaryRestrictions[this.state.filters.restrictions] :
          true;
      })
  }


  render() {
    return (
      <div>
        <Hero
          onCountrySelected={country => this.updateCountry(country)}
          onCourseSelected={course => this.updateCourse(course)}
          onRestrictionsSelected={restrictions => this.updateRestrictions(restrictions)} />
        <div className="background">
          <div className="flex-grid">
            {this.getFilteredRecipes().map((recipe, index) => (
              <Recipe
                key={index}
                id2={recipe.id}
                title2={recipe.title}
                country2={recipe.country}
                image2={recipe.image}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
