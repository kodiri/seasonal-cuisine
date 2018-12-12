import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import RecipePage from "./Home/Recipes/RecipePage";
import NotFound from "./NotFound/NotFoundPage";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/:recipeId" component={RecipePage} />
      </Switch>
    </div>
  );
}
