import React from "react";
import Hero from "./Hero.js";
import Recipes from "./../../testing-data/Data";
import Recipe from "./Recipes/Recipe";
import Button from "./Button/Button";
import "./Home.css";

export default function Routes() {
  return (
    <div>
      <Hero />
      <div className="background">
        <div className="flex-grid">
          {Recipes.map((recipe, index) => (
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
      <Button/>
    </div>
  );
}
