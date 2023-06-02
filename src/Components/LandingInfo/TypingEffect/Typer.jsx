import React, { useState, useEffect } from 'react';

const TypingEffect = ({ texts, typingSpeed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const typeText = () => {
      if (currentIndex < texts.length) {
        const currentText = texts[currentIndex];
        const nextIndex = (currentIndex + 1) % texts.length; // Wrap around to the start if reached the end

        if (typingIndex < currentText.length) {
          setDisplayText((prevText) => prevText + currentText[typingIndex]);
          setTypingIndex((prevIndex) => prevIndex + 1);
        } else {
          setTimeout(() => {
            setCurrentIndex(nextIndex);
            setTypingIndex(0);
            setDisplayText('');
          }, 2000); // Delay of 2 seconds (2000 milliseconds) before moving to the next word
        }
      }
    };

    const typingInterval = setInterval(typeText, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, texts, typingIndex, typingSpeed]);

  return (
    <span style={{ color: 'black', fontWeight: 'light' }}>
      <br />
      <b style={{ color: 'red', fontSize: '2rem' }}> <box-icon name='list-check'  ></box-icon>&nbsp; {displayText}</b>
    </span>
  );
};

export default TypingEffect;
