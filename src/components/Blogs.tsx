import * as React from 'react';
import Project from './Project';

export const Blogs: React.VFC = () => (
  <div className="max-w-7xl mx-auto my-8 px-2">
    <div className="flex justify-center text-2xl md:text-3xl font-bold">
      Blogs
    </div>
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5"></ul>
  </div>
);
