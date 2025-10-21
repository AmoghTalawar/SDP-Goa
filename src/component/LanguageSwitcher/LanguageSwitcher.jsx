import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../translations';
import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' }
  ];

  return (
    <div className="language-switcher">
      <div className="language-dropdown">
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="language-select"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;