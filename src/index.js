import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Markdown extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      userInput = ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleInput() {

  }

  handleChange() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <textarea id="editor" type="text" onChange={this.handleInput}>Markdown here...</textarea>
          <p id="preview">HTML here...</p>
        </header>
      </div>
    );
  }
}

ReactDOM.render(
    <Markdown />,
  document.getElementById('root')
);
