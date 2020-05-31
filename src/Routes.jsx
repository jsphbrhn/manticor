import React from "react";
import Home from "./Components/Home/Home";
import Formulario from "./Components/Formulario/Index";
import { Switch, Route } from "react-router-dom";

export default function () {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/formulario" component={Formulario} />
      </Switch>
    </div>
  );
}
