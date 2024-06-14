import * as React from 'react';
import Highlight from './components/Highlight';
import ReactEmbedGist from 'react-embed-gist';

const CodeExample: React.FC = () => {
  const code = `
        function greet() {
            console.log("Hello, World!");
        }
    `;
  return (
    <div>
      <h2>Example</h2>
      <ReactEmbedGist
        gist="aungthuoo/2f3365347bcd4f66d8fc899c169a5489"
        wrapperClass="gist__bash"
        loadingClass="loading__screen"
        titleClass="gist__title"
        // file=".bash_profile.sh"
      />
    </div>
  );
};

export default CodeExample;
