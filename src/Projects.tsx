import * as React from 'react';
import ProjectComponent from './components/ProjectComponent';
import { Navbar } from './components/Navbar';

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

const Projects: React.VFC = () => {
  const [blogs, setBlogs] = useState<Project[] | null>(null);

  // Fetch the JSON data on component mount
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/aungthuoo/apis/main/blogs/index.json',
    )
      .then((response) => response.json())
      .then((jsonData) => setBlogs(jsonData))
      .catch((error) => console.error('Error fetching the JSON data:', error));
  }, []);

  // Display loading message if data is not yet fetched
  if (!blogs) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-8 px-2">
        <div className="flex justify-center text-2xl md:text-3xl font-bold">
          Projects
        </div>
        {/* <pre>{JSON.stringify(blogs, null, 2)}</pre> */}

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
          {blogs.map((blog, index) => (
            <ProjectComponent key={index} project={blog} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default Projects;
