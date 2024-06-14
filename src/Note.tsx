import * as React from 'react';
import Highlight from './components/Highlight';
import ReactEmbedGist from 'react-embed-gist';
import { RouteComponentProps } from 'react-router-dom';
import { Navbar } from './components/Navbar';

interface MatchParams {
  gistId: string;
  user: string;
}
interface GistViewerProps extends RouteComponentProps<MatchParams> {}

const Note: React.FC<GistViewerProps> = ({ match }) => {
  const { user, gistId } = match.params;

  // const Note: React.FC = () => {
  const code = `
        function greet() {
            console.log("Hello, World!");
        }
    `;
  return (
    <div>
      <Navbar />
      <div className="py-5 dark:bg-gray-700 bg-gray-200 pt-12">
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xs">
          <h2>Developer note</h2>
          <ReactEmbedGist
            gist={`${user}/${gistId}`}
            wrapperClass="gist__bash"
            loadingClass="loading__screen"
            titleClass="gist__title"
            // file=".bash_profile.sh"
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
