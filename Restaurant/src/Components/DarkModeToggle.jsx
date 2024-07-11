import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? ' light-mode' : ' dark-mode';
  }, [darkMode]);

  return (
    <button 
      className="btn btn-outline-light" 
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
      {darkMode ? ' ' : ' '}
    </button>
  );
};

export default DarkModeToggle;
