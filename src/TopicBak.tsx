import * as React from 'react';
// import CategoryComponent from './CategoryComponent';
import GistViewer from './components/GistViewer';
import { RouteComponentProps } from 'react-router-dom';

interface GistFile {
  filename: string;
  type: string;
  language: string;
  raw_url: string;
  size: number;
  content: string;
}

interface Gist {
  description: string;
  files: { [key: string]: GistFile };
}

interface MatchParams {
  gistId: string;
}

interface GistViewerProps extends RouteComponentProps<MatchParams> {}

const Topic: React.FC<GistViewerProps> = ({ match }) => {
  const { gistId } = match.params;
  //const Topic: React.VFC<ChildComponentProps> = ({ id }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Gist Viewer</h1>
        <GistViewer gistId={gistId} />
      </header>
    </div>
  );
};
export default Topic;
