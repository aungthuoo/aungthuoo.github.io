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

const ProjectsComponent: React.VFC = () => {
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
    <div className="max-w-7xl mx-auto my-8 px-2">
      <div className="flex justify-center text-2xl md:text-3xl font-bold">
        Projects
      </div>
      {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}

      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
        {projects.map((project, index) => (
          <ProjectComponent key={index} project={project} />
        ))}
      </ul>
    </div>
  );
};
export default ProjectsComponent;
