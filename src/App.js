import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./core/Home";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path='/' exact>
      <Home/>
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
