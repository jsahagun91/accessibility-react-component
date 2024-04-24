import React from 'react';
import Menu from './components/Menu/Menu';
import './App.css'

import image from './images/bennys.png'

// Accessibility 
import { AccessibilityProvider } from "./components/AccessibilityContext/AccessibilityContext";
import AccessibilityButton from "./components/AccessibilityButton/AccessibilityButton";

function App() {
  return (
    <AccessibilityProvider>  {/* Ensure all components inside are wrapped by AccessibilityProvider */}
    <div className="App" style={{ filter: 'var(--grayscale-filter)', fontSize: 'var(--font-size)' }}>
      <header className="App-header">
        <h1>Benny's Burgers</h1>
        <p>123 Burger Lane, Flavor Town, USA</p>
      </header>
      <img src={image} alt="Benny's Burgers" className="restaurant-photo"/>
      <Menu />
      <AccessibilityButton />
    </div>
    </AccessibilityProvider >
  );
}

export default App;