import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "home/Footer";
import Header from "home/Header";

import "./index.scss";
import PDPContent from "./PDPContent";

const App = () => (
  <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />

      <div className="my-10">
        <Switch>
          <Route path="/product/:id" component={PDPContent} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
