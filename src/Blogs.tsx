import * as React from 'react';
import BlogComponent from './components/BlogCompoent';
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
interface Blog {
  title: string;
  author: Author;
  date: string;
  categories: Category[];
  site: string;
  path: string;
  description: string;
  images: string[];
}

const Blogs: React.VFC = () => {
  const [blogs, setBlogs] = useState<Blog[] | null>(null);

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
          Blogs
        </div>
        {/* <pre>{JSON.stringify(blogs, null, 2)}</pre> */}

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
          {blogs.map((blog, index) => (
            <BlogComponent key={index} blog={blog} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default Blogs;
