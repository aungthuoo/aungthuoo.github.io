import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';
import { styled } from '../stitches.config';
import BlogsComponent from './BlogsComponent';
import { Journey } from './profile/Journey';
import { Navbar } from './Navbar';
import { User } from './profile/User';
import ProjectsComponent from './ProjectsComponent';
import OurPartnersComponent from './OurPartnersComponent';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

const RepoReadmeLink: React.VFC = () => (
  <InteractiveLink href="https://github.com/rafgraph/spa-github-pages#readme">
    repo readme
  </InteractiveLink>
);

export const Home: React.VFC = () => (
  <div>
    <Navbar />
    <User />
    <ProjectsComponent />
    <OurPartnersComponent />
    <BlogsComponent />
  </div>
);
