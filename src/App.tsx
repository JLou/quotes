import React, { Component } from "react";
import "./App.scss";
import Quote from "./quote";
import quotes from "./quotes.json";
import icon from "./speech.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img className="header__logo" src={icon} width="200" />
          <h1 className="header__title">Le meilleur du pire des collegues</h1>
        </header>
        {quotes.map(q => (
          <Quote {...q} />
        ))}
      </div>
    );
  }
}

export default App;
