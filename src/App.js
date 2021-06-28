import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Books from "./components/Books";
import About from "./components/About";
import Soon from "./components/Soon";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="app">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={Landing} />
          <Route path="/books" exact component={Books} />
          <Route path="/about" exact component={About} />
          <Route path={() => "/main" || "/admin" || "/any-other-word"}>
            <Soon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
