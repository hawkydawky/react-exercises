import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage({ handleLanguageChange }) {
  const language = useContext(LanguageContext);

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="it">Italian</option>
      </select>
      <h1>Selected language is: {language}</h1>
    </div>
  );
}