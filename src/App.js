import React, { useState } from "react";
import { Welcome } from "./Welcome";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

export function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <Welcome name="Bernard" />
      <LanguageContext.Provider value={language}>
        <DisplayLanguage handleLanguageChange={handleLanguageChange} />
      </LanguageContext.Provider>
    </div>
  );
}