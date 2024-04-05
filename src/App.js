import React from "react";
import { Component } from "react";
import Website from "./Components/WebsiteComponent/Website";
import Counter from './Counter/Counter';
import Todo from './Todo/Todo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Switch>
          <Route path="/" exact component={Website} />
          <Route path="/counter" component={Counter} />
          <Route path="/todo" component={Todo} />
      </Switch>
      </div>
      </Router>

    )
  }
}

export default App;