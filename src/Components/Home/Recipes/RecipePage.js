import React from "react";
import Recipes from "./../../../testing-data/Data";
import "./RecipePage.css";

export default class RecipePage extends React.Component {
  constructor() {
    super();
    this.state = { recipe: {} };
  }

  componentDidMount() {
    let recipe = Recipes.find(
      recipe => recipe.id === this.props.match.params.recipeId
    );
    this.setState({ recipe });
  }

  render() {
    let recipe3 = this.state.recipe;
    return this.state.recipe ? (
      <div className="details">
        <div className="details-title">{recipe3.title}</div>
        <p className="details-content-country">{recipe3.country}</p>
        <div className="details-content-recipe">
          <img
            src={recipe3.image}
            alt={recipe3.title}
            className="recipe-image"
          />
        </div>
        <p className="details-content-course">{recipe3.course}</p>
        <hr />
        <p className="details-content-text">{recipe3.description}</p>
        <hr />
        <p className="details-content-recipe">{recipe3.recipe}</p>
        <hr />
        <p className="details-content-instructions">{recipe3.instructions}</p>
        <hr />
        <p className="details-content-time">{recipe3.time}</p>
      </div>
    ) : (
      <div>Page not found</div>
    );
  }
}
