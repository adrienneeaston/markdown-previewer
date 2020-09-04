import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var marked = require('marked');

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <textarea id="editor" type="text" onChange={this.handleChange} placeholder="markdown"></textarea>
          <p id="preview" dangerouslySetInnerHTML={{ __html:marked(this.state.userInput) }}></p>
        </header>
      </div>
    );
  }
}

ReactDOM.render(
    <Markdown />,
  document.getElementById('root')
);
