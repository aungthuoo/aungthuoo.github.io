import * as React from 'react';
import CategoryComponent from './CategoryComponent';

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

// Define the props interface for ChildComponent
interface ChildComponentProps {
  blog: Blog;
}

const BlogComponent: React.VFC<ChildComponentProps> = ({ blog }) => {
  return (
    <article className="bg-white dark:bg-gray-900 dark:text-white mb-4 break-inside break-inside-avoid p-6 rounded-xl bg-white flex flex-col bg-clip-border max-w-md">
      <div className="flex items-center justify-between">
        <div className="flex">
          <a className="inline-block mr-4" href="#">
            <img
              className="rounded-full max-w-none w-10 h-10"
              src={blog.author.image}
            />
          </a>
          <div className="flex flex-col">
            <div className="flex items-center">
              <a className="inline-block text-lg font-bold mr-2" href="#">
                {blog.author.name}
              </a>
              <span className="text-slate-500">{blog.author.position}</span>
            </div>
            <div className="flex items-center">
              <a className="inline-block text-slate-500 text-xs mr-2" href="#">
                {blog.date}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-1 content-stretch py-4">
        {blog.images.map((image, index) => (
          <a className="flex" href="#">
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
        <a href={'/blogs' + blog.path} className="cursor-pointer">
          {blog.title}
        </a>
      </h2>
      <div className="text-slate-500">
        {blog.categories &&
          blog.categories.length > 0 &&
          blog.categories.map((category, index) => (
            <CategoryComponent key={index} category={category} />
          ))}
      </div>
      {blog.description && (
        <div className="py-4">
          <p>{blog.description}</p>
        </div>
      )}
      {blog.path && (
        <div className="pt-6">
          <div className="w-full">
            <a
              target="_blank"
              href={'/blogs' + blog.path}
              className="dark:bg-gray-700 dark:text-white py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75"
            >
              View more
            </a>
          </div>
        </div>
      )}
    </article>
  );
};
export default BlogComponent;
