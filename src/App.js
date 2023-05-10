// import logo from './logo.svg';
//import './App.css';
import { useState, useEffect } from 'react';
import { marked } from 'marked';

function App() {
  const [preview, setPreview] = useState('');

  useEffect(() => {
    let input = [
      '# H1\n',
      '## H2\n',
      '[title](https://www.freecodecamp.org)\n',
      '\`code\`\n',
      '\`\`\`\n{\n"firstName": "John",\n"lastName": "Smith",\n"age": 25\n}\n\`\`\`\n',
      '- First item \n- Second item \n- Third item\n',
      '> blockquote\n',
      '![alt text](image.jpg)\n',
      '**bold text**\n'
    ];
    
    if(preview === '') {
      setPreview(input.join('\n'));
    }
  });

  const onChange = (text) => {
    setPreview(text);
  }

  marked.use({
    breaks: true
  });
  
  return (
    <div className={"container"}>

      <div className={"left"}>
        <textarea 
          id={"editor"}
          onChange={(e) => onChange(e.target.value)}
          value={preview}
        >
        </textarea>
      </div>

      <div class={"right"}>
        <div class={"preview-container"}>
          <div id={"preview"}
          dangerouslySetInnerHTML={{
            __html: marked.parse(preview)
          }} 
          >
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
