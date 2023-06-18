import React, { useState } from 'react';
import "./WordCount.css";
function WordCountApp() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setWordCount(countWords(newText));
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  return (
    <div>
        <center>
        <div className='Container'>
      <h1>Reponsive Paragraph Word Counter</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text..."
      />
      <p>Word Count: {wordCount}</p>
      </div>
      </center>
    </div>
  );
}

export default WordCountApp;