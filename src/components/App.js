import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";
import Test4 from "./Test4";
import "../styles/App.css";

function App() {
  return (
    <div className="App" data-testid="app">
      <Navbar />
      <Switch>
        <Route exact path="/three" component={Test1} />
        <Route exact path="/three/test2" component={Test2} />
        <Route exact path="/three/test3" component={Test3} />
        <Route exact path="/three/test4" component={Test4} />
      </Switch>
    </div>
  );
}

export default App;
