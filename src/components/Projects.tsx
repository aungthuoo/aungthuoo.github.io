import * as React from 'react';
import Project from './Project';
const { useState, useEffect } = React;

interface DataItem {
  title: string;
  description: string;
}

const Projects: React.VFC = () => {
  const [data, setData] = useState<DataItem[] | null>(null);

  // Fetch the JSON data on component mount
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/aungthuoo/apis/main/portfolio/projects.json',
    )
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching the JSON data:', error));
  }, []);

  // Display loading message if data is not yet fetched
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-7xl mx-auto my-8 px-2">
      <div className="flex justify-center text-2xl md:text-3xl font-bold">
        Projects
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
        {data.map((item, index) => (
          <Project key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};
export default Projects;

/*
export const Projects: React.VFC = () => (
  <div className="max-w-7xl mx-auto my-8 px-2">
    <div className="flex justify-center text-2xl md:text-3xl font-bold">
      Projects
    </div>
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </ul>
  </div>
);
*/
