// src/components/FontSizeContext/FontSizeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export const useFontSize = () => useContext(AccessibilityContext);

export const useContrast = () => useContext(AccessibilityContext);

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16); // Default font size
  const [isGrayscale, setIsGrayscale] = useState(false); // Grayscale state
  const [contrast, setContrast] = useState(100); // default contrast level

  const increaseFontSize = () => setFontSize(prevSize => prevSize + 1);
  const decreaseFontSize = () => setFontSize(prevSize => prevSize - 1);
  const toggleGrayscale = () => setIsGrayscale(prev => !prev);

  const increaseContrast = () => {
    setContrast(prevContrast => Math.min(prevContrast + 10, 300)); // caps at 200%
  };
  const decreaseContrast = () => {
    setContrast(prevContrast => Math.max(prevContrast - 10, 50)); // minimum 100%
  };

  const resetSettings = () => {
    setFontSize(16);      // Reset font size to initial value
    setIsGrayscale(false); // Reset grayscale to off
    setContrast(100);     // Reset contrast to initial value
  };

  // Apply the font size and grayscale filter as CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
    document.documentElement.style.setProperty('--grayscale-filter', isGrayscale ? 'grayscale(100%)' : 'none');
    document.documentElement.style.filter = `contrast(${contrast}%)`;
  }, [fontSize, isGrayscale, contrast]);

  return (
    <AccessibilityContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize, isGrayscale, toggleGrayscale, contrast, increaseContrast, decreaseContrast, resetSettings }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
