import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import ReactEmbedGist from 'react-embed-gist';
const { useState, useEffect } = React;

interface Author {
  name: string;
  image: string;
  link: string;
  position: string;
}

interface Category {
  name: string;
}
interface Gist {
  user: string;
  link: string;
}

interface MatchParams {
  slug: string;
}
interface GistViewerProps extends RouteComponentProps<MatchParams> {}

const Blog: React.FC<GistViewerProps> = ({ match }) => {
  const { slug } = match.params;
  const [gist, setGist] = useState<Gist | null>(null);
  const url = `https://raw.githubusercontent.com/aungthuoo/apis/main/blogs/topics/${slug}.json`;
  console.log(slug);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => setGist(jsonData))
      .catch((error) => console.error('Error fetching the JSON data:', error));
  }, []);

  // const Note: React.FC = () => {
  const code = `
        function greet() {
            console.log("Hello, World!");
        }
    `;

  // Display loading message if data is not yet fetched
  if (!gist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="py-5 pt-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-xs">
          <div className="flex flex-col">
            <div className="flex items-center">
              <a
                className="inline-block text-md font-bold mr-2 py-2 px-6 cursor-pointer text-center"
                href="#"
              >
                # Developer note
              </a>
              {/* <span className="text-slate-500">Johnson &amp; Johnson</span> */}
            </div>
          </div>
          <ReactEmbedGist
            gist={`${gist.user}/${gist.link}`}
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

export default Blog;
