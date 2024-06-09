import * as React from 'react';
import CategoryComponent from './CategoryComponent';

interface Category {
  name: string;
}
interface Blog {
  title: string;
  company: string;
  categories: Category[];
  link: string;
  description: string;
  images: string[];
}

// Define the props interface for ChildComponent
interface ChildComponentProps {
  blog: Blog;
}

const BlogComponent: React.VFC<ChildComponentProps> = ({ blog }) => {
  return (
    <article className="mb-4 break-inside break-inside-avoid p-6 rounded-xl bg-white flex flex-col bg-clip-border max-w-md">
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
              <a className="inline-block text-lg font-bold mr-2" href="#">
                {blog.title}
              </a>
              {/* <span className="text-slate-500">Johnson &amp; Johnson</span> */}
            </div>
            <div className="text-slate-500">
              {blog.categories &&
                blog.categories.length > 0 &&
                blog.categories.map((category, index) => (
                  <CategoryComponent key={index} category={category} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 content-stretch py-4">
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
      <h2 className="text-3xl font-extrabold">{blog.title}</h2>
      <div className="py-4">
        <p>{blog.description}</p>
      </div>
      {blog.link && (
        <div className="pt-6">
          <div className="w-full">
            <a
              target="_blank"
              href={blog.link}
              className="py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75"
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
