import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../layouts/Layout';

import Header from '../../components/Header';
import Content from '../../components/Content';
import Window from '../../components/Window';

const Overview = ({ data }) => {
  const { allMarkdownRemark } = data;

  return (
    <Layout>
      <Header>
        <Link to="/" className="p-2 cursor-pointer hover:text-extra">
          Back
        </Link>
      </Header>

      <Content>
        <div className="flex gap-x-2">
          {allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div className="flex flex-col bg-dark text-white rounded-xl w-64">
                <Window>
                  <Link
                    to={node.frontmatter.slug}
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
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            slug
            date
            description
          }
        }
      }
    }
  }
`;

export default Overview;
