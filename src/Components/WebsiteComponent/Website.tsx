import React from "react";
import { Component } from "react";
import Header from "../Header/Header";
import WhatCanIdo from "../What-can-do/What-can-do";
import Study from "../Study/Study";
import {BrowserRouter as Router, Link } from 'react-router-dom';

class Website extends Component {
  render() {
    return (
      <div>
          <Header />
          <WhatCanIdo />
          <Study />
          <Router>
          <Link to="/counter">
          <button className="btn btn-primary mx-auto d-block mt-2 mb-4">Counter Project</button>
          </Link>
          <Link to="/todo">
          <button className="btn btn-primary mx-auto d-block mt-2 mb-4">To do app</button>
          </Link>
          </Router>
      </div>
    )
  }
}

export default Website;