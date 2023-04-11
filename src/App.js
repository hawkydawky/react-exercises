import React from "react";
import { Welcome } from "./Welcome";
import { Login } from "./Login";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

export class App extends React.Component {
  state = {
    language: 'en',
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Welcome name="Bernard" />
        <Login />
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage handleLanguageChange={this.handleLanguageChange} />
        </LanguageContext.Provider>
      </div>
    );
  }
}