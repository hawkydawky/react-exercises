import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {language => (<div>
          <select value={language} onChange={this.props.handleLanguageChange}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="it">Italian</option>
          </select>
          <h1>Selected language is: {language}</h1>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

