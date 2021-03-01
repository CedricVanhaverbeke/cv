/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden bg-background">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cedric Vanhaverbeke</title>
        <meta
          name="description"
          content="Cedric Vanhaverbeke. Software Engineer."
        />
      </Helmet>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
