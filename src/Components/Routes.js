import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import RecipePage from "./Home/Recipes/RecipePage";

export default function Routes() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/:recipeId" component={RecipePage} />
    </div>
  );
}
