import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../../layouts/Layout';

import Header from '../../components/Header';
import BlogContent from '../../components/BlogContent';

import renderAst from '../../utils/renderAst';

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>{data.markdownRemark.frontmatter.title}</title>
      </Helmet>
      <Header hasBackButton={true} hasPageLinks={false} />

      <BlogContent>
        <div className="flex flex-col space-y-2 mb-10">
          <span className="fira text-4xl md:text-5xl font-bold">
            {data.markdownRemark.frontmatter.title}
          </span>
          <span className="text-neutral-100 text-lg md:text-xl">
            {data.markdownRemark.frontmatter.description}
          </span>
          <div className="text-neutral-100 uppercase text-xs border-t border-extra flex self-start pt-2 space-x-1">
            <span>{data.markdownRemark.frontmatter.date}</span>
            <span>-</span>
            <span>{data.markdownRemark.timeToRead} min read</span>
          </div>
        </div>

        <div className="blogpost">{renderAst(data.markdownRemark.htmlAst)}</div>
      </BlogContent>
    </Layout>
  );
};

export const pageQuery = graphql`
  query Blogpost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date
        description
        title
      }
      htmlAst
      timeToRead
    }
  }
`;

export default BlogPost;
