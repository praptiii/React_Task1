import React, { useState } from 'react';
import './WordCounter.css';

const WordCounter = () => {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).length;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="word-counter-container">
      <div className="word-counter-box">
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          className="text-area"
          value={text}
          onChange={handleChange}
          placeholder="Type your text here"
        />
        <p>Word count: {wordCount}</p>
      </div>
    </div>
  );
};

export default WordCounter;