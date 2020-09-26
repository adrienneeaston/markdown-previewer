import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var marked = require('marked');

const placeholderText = `# h1 header  
## h2 header
[markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/)  

Using \`<div>\` does not give semantic meaning to help accessibility  

List items:
- list item one  
- list item two 

As Shakespeare said:
> The be or not to be?  
> That is the question.  

\`console.log('Hello world!');\`  

![Maine Coon cat](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3pwWDJXjpLbSRicFy2lpAZ3d-Z_ONGlITtw&usqp=CAU)  

It is so **fluffy**!`;

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: placeholderText
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
          <textarea id="editor" type="text" onChange={this.handleChange} placeholder={this.state.userInput}></textarea>
          <p id="preview" dangerouslySetInnerHTML={{ __html:marked(this.state.userInput)}}></p>
        </header>
      </div>
    );
  }
}

ReactDOM.render(
    <Markdown />,
  document.getElementById('root')
);
