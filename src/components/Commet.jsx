import React, { useState, useEffect } from 'react';
import './css/Comet.css';

const Comet = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [display, setDisplay] = useState(false);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(true);
      setBlink(true);
    }, 3500);

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      let offsetX = 30;
      let offsetY = 30;

      if (clientX > innerWidth - 100) {
        offsetX = -50;
      } else if (clientX < 100) {
        offsetX = 50;
      }

      if (clientY > innerHeight - 100) {
        offsetY = -50;
      } else if (clientY < 100) {
        offsetY = 50;
      }

      setPosition({
        x: clientX + offsetX,
        y: clientY + offsetY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className={`comet ${display ? 'display' : ''} ${blink ? 'blink' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Comet;
