import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.scss";
import Quote from "./quote";
import quotes from "./quotes.json";
import icon from "./speech.svg";
import Author from "./author/Author";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">
            <img className="header__logo" src={icon} width="200" />
            <h1 className="header__title">
              <Link to="/">Le meilleur du pire des collegues</Link>
            </h1>
          </header>

          <Route
            exact
            path="/"
            component={(props: any) => (
              <>
                {quotes.map(q => (
                  <Quote {...q} />
                ))}
              </>
            )}
          />
          <Route path="/author/:name" component={Author} />
        </div>
      </Router>
    );
  }
}

export default App;
