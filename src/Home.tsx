import * as React from 'react';
import { InteractiveLink } from './ui/InteractiveLink';
import { P } from './ui/Paragraph';
import { styled } from './stitches.config';
import BlogsComponent from './components/BlogsComponent';
import { Journey } from './components/profile/Journey';
import { Navbar } from './components/Navbar';
import User from './components/profile/User';
import ProjectsComponent from './components/ProjectsComponent';
import OurPartnersComponent from './components/OurPartnersComponent';
import FooterComponent from './components/FooterComponent';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

const brand = {
  title: 'SoftwareZay',
  image: '',
};

const RepoReadmeLink: React.VFC = () => (
  <InteractiveLink href="https://github.com/rafgraph/spa-github-pages#readme">
    repo readme
  </InteractiveLink>
);

export const Home: React.VFC = () => (
  <div className="bg-gray-200 dark:bg-gray-700 bg-gray-200 ">
    <Navbar />
    <User />
    <ProjectsComponent />
    <OurPartnersComponent />
    <BlogsComponent />
    <FooterComponent brand={brand} />
  </div>
);
