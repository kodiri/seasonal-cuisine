import React from "react";
import { Redirect } from "react-router-dom";
import Recipes from "./../../../testing-data/Data";
import "./RecipePage.css";

export default class RecipePage extends React.Component {
  constructor() {
    super();
    this.state = { recipe: { ingredients: [], instructions: [] } };
  }

  componentDidMount() {
    let recipeData = Recipes.find(
      recipe => recipe.id === this.props.match.params.recipeId
    );
    this.setState({ recipe: recipeData });
  }

  render() {
    let recipe3 = this.state.recipe;
    return this.state.recipe ? (
      <div className="details">
        <div className="recipe-wrap-image">
          <img
            src={recipe3.image}
            alt={recipe3.title}
            className="recipe-image"
          />
        </div>
        <div className="wrap-country-time">
          <p className="details-content-country">{recipe3.country}</p>
          <p className="details-content-time">{recipe3.time}</p>
        </div>
        <div className="wraw-details-title">
          <p className="details-title">{recipe3.title}</p>
          <p className="details-content-text">{recipe3.description}</p>
          <p className="details-subtitle">{recipe3.subtitle}</p>
          <ul>
            <p className="details-content-recipe">
              {recipe3.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </p>
          </ul>
          <p className="details-subtitle">{recipe3.message}</p>
          <ul>
            <p className="details-content-instructions">
              {recipe3.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </p>
          </ul>
        </div>
      </div>
    ) : (
      <Redirect to="/not-found" />
    );
  }
}
