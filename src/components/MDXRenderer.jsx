import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

function MDXRenderer() {
  const [text, setText] = useState('# Título\n\nEste es un párrafo de texto en **negrita**.');

  const handleTextChange = (value) => {
    setText(value);
    console.log(text);
  };

  return (
    <div className="app-container">
      <ReactQuill value={text} onChange={handleTextChange} />
      <hr />
      Texto: 
      <ReactMarkdown className="markdown-container" source={text} />
    </div>
  );
}

export default MDXRenderer;
