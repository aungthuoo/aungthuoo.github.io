import * as React from 'react';
import ProjectComponent from './ProjectComponent';
const { useState, useEffect } = React;

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

const RelatedProjectsComponent: React.VFC = () => {
  const [projects, setProjects] = useState<Project[] | null>(null);

  // Fetch the JSON data on component mount
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/aungthuoo/apis/main/projects/index.json',
    )
      .then((response) => response.json())
      .then((jsonData) => setProjects(jsonData))
      .catch((error) => console.error('Error fetching the JSON data:', error));
  }, []);

  // Display loading message if data is not yet fetched
  if (!projects) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-blue-100 w-full mb-8">
      <div className="flex justify-center text-2xl md:text-3xl font-bold py-5">
        Related Projects
      </div>
      <div className="w-full flex flex-row overflow-x-scroll scrollbar-hide">
        {projects.map((project, index) => (
          <div className="bg-white h-full w-72 ml-4  p-6  rounded-md shrink-0">
            <h2 className="text-xl font-extrabold">
              <a href={'/projects/' + project.slug} className="cursor-pointer">
                {project.sub_title}
              </a>
            </h2>

            <div className="grid grid-cols-2 gap-1 content-stretch py-4">
              {project.images.slice(0, 2).map((image, index) => (
                <a className="flex" href={project.link}>
                  <img
                    className="max-w-full object-contain item-center"
                    src={image}
                  />
                </a>
              ))}
            </div>
            <div className="py-1">
              <strong className="text-black dark:text-white">
                {project.client}
              </strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RelatedProjectsComponent;
