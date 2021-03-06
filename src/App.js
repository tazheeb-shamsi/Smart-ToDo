import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
