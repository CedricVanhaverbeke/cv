import '../../theme/tailwind.css';

import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../../layouts/Layout';

import Header from '../../components/Header';
import Content from '../../components/Content';
import Window from '../../components/Window';

const Overview = ({ data }) => {
  const { allMarkdownRemark } = data;

  return (
    <Layout>
      <Header />
      <Helmet>
        <title>Blog - Cedric Vanhaverbeke</title>
      </Helmet>

      <Content className="px-6 md:px-16">
        <div className="flex gap-4 flex-wrap justify-center md:justify-start py-4">
          {allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div className="flex flex-col bg-dark text-white rounded-xl w-full mx-1 md:w-1/3 lg:w-1/5">
                <Window>
                  <Link
                    to={node.id}
                    style={{ fontFamily: 'Fira Mono' }}
                    className="flex flex-col p-3"
                  >
                    <h1>{node.frontmatter.title}</h1>
                    <span className="text-xs opacity-75 mb-4">
                      {node.frontmatter.description}
                    </span>
                    <span className="text-xs self-end">
                      {node.frontmatter.date}
                    </span>
                  </Link>
                </Window>
              </div>
            );
          })}
        </div>
      </Content>
    </Layout>
  );
};

export const pageQuery = graphql`
  query Blogposts {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
        }
      }
    }
  }
`;

export default Overview;
