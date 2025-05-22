import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pt-BR" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 text-sm font-medium rounded-md transition-colors"
      aria-label="Toggle language"
    >
      {i18n.language === "en" ? "PT-BR" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
