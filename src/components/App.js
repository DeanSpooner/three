import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";
import "../styles/App.css";

function App() {
  return (
    <div className="App" data-testid="app">
      <Navbar />
      <Switch>
        <Route exact path="/three" component={Test1} />
        <Route exact path="/three/test2" component={Test2} />
        <Route exact path="/three/test3" component={Test3} />
      </Switch>
    </div>
  );
}

export default App;
