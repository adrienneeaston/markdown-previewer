import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Markdown() {
  return (
    <div className="App">
      <header className="App-header">
        <input id="editor" type="text" placeholder="markdown" />
        <p id="preview">HTML here</p>
      </header>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Markdown />
  </React.StrictMode>,
  document.getElementById('root')
);
