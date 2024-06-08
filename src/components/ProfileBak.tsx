import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';
import { styled } from '../stitches.config';
import { Blogs } from './Blogs';
import { Journey } from './profile/Journey';
import { Navbar } from './Navbar';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

const RepoReadmeLink: React.VFC = () => (
  <InteractiveLink href="https://github.com/rafgraph/spa-github-pages#readme">
    repo readme
  </InteractiveLink>
);

export const Profile: React.VFC = () => (
  <div className="flex justify-center items-center bg-slate-100">
    <div className="flex flex-col justify-center items-center  space-x-4">
      <div className="box-border max-w-7xl mx-4 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3">
        <Journey />
        <Blogs />
      </div>
    </div>
  </div>
);
