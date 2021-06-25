import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Landing";
import Books from "./components/Books";
import About from "./components/About";
import Footer from "./components/Footer";
import Soon from "./components/Soon";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="app">
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/books" exact component={Books} />
          <Route path="/about" exact component={About} />
          <Route path={() => "/main" || "/admin" || "/any-other-word"}>
            <Soon />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};
export default App;
