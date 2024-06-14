import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import CategoryComponent from './components/CategoryComponent';
import RelatedProjectsComponent from './components/RelatedProjectsComponent';
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
interface Project {
  slug: string;
  title: string;
  sub_title: string;
  client: string;
  company: string;
  categories: Category[];
  link: string;
  description: string;
  images: string[];
}

interface MatchParams {
  slug: string;
}
interface GistViewerProps extends RouteComponentProps<MatchParams> {}

const Project: React.FC<GistViewerProps> = ({ match }) => {
  const { slug } = match.params;
  const [project, setProject] = useState<Project | null>(null);
  const url = `https://raw.githubusercontent.com/aungthuoo/apis/main/projects/${slug}.json`;
  console.log(slug);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => setProject(jsonData))
      .catch((error) => console.error('Error fetching the JSON data:', error));
  }, []);

  // const Note: React.FC = () => {
  const code = `
        function greet() {
            console.log("Hello, World!");
        }
    `;

  // Display loading message if data is not yet fetched
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="dark:bg-gray-700 bg-gray-200 pt-12 pb-8">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xs">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xs"></div>
          <article className="mb-4 break-inside break-inside-avoid p-6 rounded-xl bg-white flex flex-col bg-clip-border max-w-3xl">
            <div className="flex pb-6 items-center justify-between">
              <div className="flex">
                <a className="inline-block mr-4" href="#">
                  <img
                    className="rounded-full max-w-none w-10 h-10"
                    src="/images/logos/softwarezay.png"
                  />
                </a>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <a
                      className="inline-block text-lg font-bold mr-2 cursor-pointer"
                      href={'/projects/' + project.slug}
                    >
                      {project.title}
                    </a>
                    {/* <span className="text-slate-500">Johnson &amp; Johnson</span> */}
                  </div>
                  <div className="text-slate-500">
                    {project.categories &&
                      project.categories.length > 0 &&
                      project.categories.map((category, index) => (
                        <CategoryComponent key={index} category={category} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1 content-stretch py-4">
              {project.images.map((image, index) => (
                <a className="flex" href={project.link}>
                  <img className="object-cover object-cover" src={image} />
                </a>
              ))}
            </div>
            {/* <div className="flex flex-col gap-1 flex-1">
          <a className="flex h-full" href="#">
            <img
              className="max-w-full rounded-tr-lg rounded-br-lg object-contain"
              src="https://images.pexels.com/photos/247931/pexels-photo-247931.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            />
          </a>
        </div> */}
            <h2 className="text-3xl font-extrabold">
              <a href={project.link} className="cursor-pointer">
                {project.sub_title}
              </a>
            </h2>
            <div className="py-1">
              <strong className="text-black dark:text-white">
                {project.client}
              </strong>
            </div>
            {project.description && (
              <div className="py-4">
                <div
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>
            )}
            {project.link && (
              <div className="pt-6">
                <div className="w-full">
                  <a
                    href={'/projects/' + project.slug}
                    className="py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75 cursor-pointer"
                  >
                    View more
                  </a>
                </div>
              </div>
            )}
          </article>
        </div>
      </div>

      <RelatedProjectsComponent />
    </div>
  );
};

export default Project;
