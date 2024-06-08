import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';
import { styled } from '../stitches.config';
import { Blogs } from './Blogs';
import { Journey } from './profile/Journey';
import { Navbar } from './Navbar';
import { User } from './profile/User';
import Projects from './Projects';
import { OurPartners } from './OurPartners';

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
  <div>
    <User />
    <Projects />
    <OurPartners />
    <Blogs />
  </div>
);
