
const domElement = document.querySelector("#root")
const defaultText = `# This is my Preview Editor  
## This is an H2 with markedown  
This is a link to [Google] (https://www.google.com)

For this section here is an exemple of code:
\`class App extends React.component {}\`  

\`\`\`
function testatest() {
  if (test == true) {
    return 'whouuuaaaa'
  }
}
\`\`\`  
Now for the list:
* coding
* eating
* sleeping

As **Kanye West** said:
> we're living the futur so
> the present is our past

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: defaultText
    }
    this.handleChange = this.handleChange.bind(this)
   
  }
 ;
  

  handleChange(event) {
  this.setState({
    editor: event.target.value
  });
    
  }

 
  render() {
    return (
      <div>
        <div className='title'>
            <h1>Markedown Editor</h1>
        </div>
        <div className='container'>
          <div className='textEditor'>
        
        
            <textarea
              id='editor'
              name='editor'
              //value={this.state.input}
              onChange={this.handleChange}
        
            >
              {this.state.editor}
            </textarea>
        
        
          </div>
          <Preview data={this.state.editor} />
        </div>
      </div>
    );
  }
};

class Preview extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div className='previewContainer'>
      
        
        <div className='previewInner'id='preview' dangerouslySetInnerHTML={{__html: marked(this.props.data)}}>
      </div>
      
      
    </div>
    )
  }
}

ReactDOM.render(<App />, domElement);
