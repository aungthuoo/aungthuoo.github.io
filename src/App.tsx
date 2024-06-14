import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { globalCss, styled } from './stitches.config';
import { ExampleTwoDeepComponent } from './components/ExampleTwoDeepComponent';
import { SitemapLinkGenerator } from './components/SitemapLinkGenerator';
import { PageNotFound } from './components/PageNotFound';
import { Home } from './Home';
import Blogs from './Blogs';
import Blog from './Blog';
import Projects from './Projects';
import Project from './Project';
import TestBlog from './TestBlog';

const AppContainer = styled('div', {
  // maxWidth: '540px',
  padding: '3px 3px',
  margin: '0 auto',
});

const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '18px',
});

const H1 = styled('h1', {
  fontSize: '26px',
  marginRight: '16px',
});

const HeaderIconContainer = styled('span', {
  width: '78px',
  display: 'inline-flex',
  justifyContent: 'space-between',
  gap: '12px',
});

const BreadcrumbsNav = styled('nav', {
  margin: '18px 0',
});

export const App: React.VFC = () => {
  globalCss();

  return (
    <AppContainer>
      {/*       
      <HeaderContainer>
        <H1>Aung Thu Oo | Profile</H1>
        <HeaderIconContainer>
          <DarkModeButton />
          <GitHubIconLink
            href="https://github.com/rafgraph/spa-github-pages"
            title="GitHub repository for SPA GitHub Pages"
          />
        </HeaderIconContainer>
      </HeaderContainer> */}

      {/* <BreadcrumbsNav>
        <Breadcrumbs />
      </BreadcrumbsNav> */}

      <Switch>
        <Route exact path="/" component={Home} />

        {/* <Route exact path="/topics/:gistId" component={Topic} /> */}
        {/* <Route exact path="/example" component={CodeExample} /> */}
        {/* <Route exact path="/:user/:gistId" component={Blog} /> */}

        <Route exact path="/profile" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:slug" component={Project} />
        <Route exact path="/brands" component={Home} />

        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/topics/:slug" component={Blog} />

        <Route exact path="/test-blog" component={TestBlog} />

        <Route
          exact
          path="/example/two-deep"
          component={ExampleTwoDeepComponent}
        />
        <Route
          exact
          path="/sitemap-link-generator"
          component={SitemapLinkGenerator}
        />
        <Route component={PageNotFound} />
      </Switch>
    </AppContainer>
  );
};
