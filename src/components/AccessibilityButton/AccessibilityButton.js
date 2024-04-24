// src/components/FontSizeButton/FontSizeButton.js
import React, { useState } from 'react';
import { useFontSize, useContrast } from '../AccessibilityContext/AccessibilityContext';
import { IoAccessibilityOutline } from "react-icons/io5";
import { HiMiniMagnifyingGlassPlus, HiMiniMagnifyingGlassMinus } from "react-icons/hi2";
import { FaBarcode } from "react-icons/fa6";
import { IoMdContrast } from "react-icons/io";
import { IoContrastSharp } from "react-icons/io5";
import { RxReset } from "react-icons/rx";




const AccessibilityButton = () => {
  const { increaseFontSize, decreaseFontSize, toggleGrayscale, resetSettings } = useFontSize();
  const { increaseContrast, decreaseContrast } = useContrast(); // use contrast functions
  const [showControls, setShowControls] = useState(false);
  

  return (
    <div style={{ position: 'fixed', top: 10, left: 10, zIndex: 1000 }}>
      <button
        onClick={() => setShowControls(prev => !prev)}
        style={{ 
          borderRadius: '50%', 
          backgroundColor: 'blue', 
          color: 'white',
          width: 45, 
          height: 45,
          fontSize: '2rem',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <IoAccessibilityOutline/>
      </button>
      {showControls && (
        <div style={{ 
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
             }}>
          <button onClick={increaseFontSize} style={{ borderRadius: '50%', width: 45, height: 45, marginRight: 5, fontSize: '1.25rem', marginBottom: 5  }}>
            <HiMiniMagnifyingGlassPlus/>
          </button>
          <button onClick={decreaseFontSize} style={{ borderRadius: '50%', width: 45, height: 45, marginRight: 5, fontSize: '1.25rem', marginBottom: 5  }}>
            <HiMiniMagnifyingGlassMinus />
          </button>
          <button onClick={toggleGrayscale} style={{ borderRadius: '50%', width: 45, height: 45, marginRight: 5, fontSize: '1.25rem', marginBottom: 5  }}>
            <FaBarcode />
          </button>
          <button onClick={increaseContrast} style={{ borderRadius: '50%', width: 45, height: 45, marginRight: 5, fontSize: '1.25rem', marginBottom: 5}}>
            <IoMdContrast />
          </button>
          <button onClick={decreaseContrast} style={{ borderRadius: '50%', width: 45, height: 45, marginRight: 5, fontSize: '1.25rem', marginBottom: 5 }}>
            <IoContrastSharp />
          </button>
          <button onClick={resetSettings} style={{ borderRadius: '50%', width: 45, height: 45, marginRight: 5, fontSize: '1.25rem', marginBottom: 5 }}>
            <RxReset />
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityButton;
