import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home/Home";

export default function Routes() {
  return (
    <div>
      <Route path="/" component={Home} />
    </div>
  );
}
