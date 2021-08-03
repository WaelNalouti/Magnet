import React from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Form from "./components/create/Form";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add-order" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
