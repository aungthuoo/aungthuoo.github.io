import * as React from 'react';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Import a style, e.g., Prism
import styled from 'styled-components';

import {
  //GistContainer,
  GistFile,
  FileName,
  FileContent,
} from './components/GistStyle';

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

const GistContainer = styled.div`
  margin: 20px 0;
`;

interface GistViewerProps extends RouteComponentProps<MatchParams> {}

const GistViewer: React.FC<GistViewerProps> = ({ match }) => {
  const { gistId } = match.params;
  const [gist, setGist] = useState<Gist | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGist = async () => {
      try {
        const response = await axios.get<Gist>(
          `https://api.github.com/gists/${gistId}`,
        );
        setGist(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGist();
  }, [gistId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <GistContainer>
      {gist &&
        Object.values(gist.files).map((file) => (
          <GistFile key={file.filename}>
            <FileName>{file.filename}</FileName>
            <FileContent>
              <ReactMarkdown>{file.content || ''}</ReactMarkdown>
            </FileContent>
          </GistFile>
        ))}
    </GistContainer>
  );
  /*
  return (
    <GistContainer>
      <SyntaxHighlighter language="javascript" style={prism}>
        {gist &&
          Object.values(gist.files).map((file) => (
            <GistFile key={file.filename}>
              <FileName>{file.filename}</FileName>
              <FileContent>
                <ReactMarkdown>{file.content || ''}</ReactMarkdown>
              </FileContent>
            </GistFile>
          ))}
      </SyntaxHighlighter>
    </GistContainer>
  );
  */
};

export default GistViewer;
