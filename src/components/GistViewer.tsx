// src/components/GistViewer.js
import * as React from 'react';
// import Markdown from 'markdown-parser-react';
import ReactMarkdown from 'react-markdown';

const { useState, useEffect } = React;
// import axios from 'axios';

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

interface GistViewerProps {
  gistId: string;
}

const GistViewer: React.FC<GistViewerProps> = ({ gistId }) => {
  const [gist, setGist] = useState<Gist | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /*
    const fetchGist = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/gists/${gistId}`,
        );
        setGist(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    */
    const fetchGist = async () => {
      fetch(`https://api.github.com/gists/${gistId}`)
        .then((response) => response.json())
        .then((jsonData) => setGist(jsonData))
        .catch((error) =>
          console.error('Error fetching the JSON data:', error),
        );
    };

    fetchGist();
  }, [gistId]);

  //if (loading) return <div>Loading...</div>;
  //if (error) return <div>Error: {error.message}</div>;
  if (!gist) {
    return <div>Loading...</div>;
  }

  const markdownFile =
    gist &&
    Object.values(gist.files).find((file) => file.language === 'Markdown');

  return (
    <div>
      <h1>{gist?.description}</h1>
      {markdownFile ? (
        <ReactMarkdown>{markdownFile.content || ''}</ReactMarkdown>
      ) : (
        <div>No markdown file found in this gist.</div>
      )}
    </div>
  );
};

export default GistViewer;
