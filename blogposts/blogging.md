---
date: '8/03/2021'
title: 'Blogging with Gatsby and Markdown'
description: "Curious how I created this blog? Let's kick off my blogging career with explaining how I did it."
---

## Setting up a blog can be done in a multitude of ways. Here's how I did it:

# Overview

1. Taking advantage of Gatsby's features
2. Configuring the blog
3. Creating an overview of blogposts
4. Creating a blogpost page

# Taking advantage of Gatsby's features

Gatsby provides tools for building blazing fast static sites. We could write every blogpost in React components are even plain HTML, but that would soon become very cumbersome. Markdown is the way to go! To achieve this goal, we'll use following Gatsby features:

1. `gatsby-source-filesystem` : Allows for locally stored files to be used as data nodes inside your Gatsby application.
2. `gatsby-transformer-remark` : This plugin is needed for markdown files to be transformed and to be used by the `gatsby-transform-remark`.

The filesystem can be accessed with GraphQL. I seriously recommend checking out the generated GraphQL playground. You can access it by visiting `http://localhost:YOUR_PORT/__graphql`. A screenshot of the playground environment can be found below:

![Default GraphQL playground of Gatsby](https://res.cloudinary.com/dz7llxvvv/image/upload/v1615244196/blog/Schermafbeelding_2021-03-08_om_23.56.14_icxyfi.png)

# Requirements the blog

First, install following dependencies:

```sh
# command line

yarn add gatsby-source-filesystem # or install with npm
yarn add gatsby-transformer-remark # or install with npm
```

After that, some config has to be set up:

```js
// gatsby-config.js

module.exports = {
  ...
  plugins: [
    ...
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogposts`,
        path: `${__dirname}/blogposts`, // your blogpost folder
      },
    },
    `gatsby-transformer-remark`,
};
```

The next step consist of creating two pages in the project. One page is responsible for showing a list of the blogposts. Your blogposts can be read on the second page. In Gatsby, routing is handled for you if you put the pages in the right spot:

1. `src/pages/blog/index.js` : The list of blogposts. This file will be mapped to the `/blog` route.
2. `src/pages/blog/{MarkdownRemark.id}.js` : The blogpost itself. This file will be mapped to the `/blog/your-id-here` route.

Lastly, add a mock blogpost in the folder you configured, so you can actually get some data. To include some metadata in your blogpost, simply add a frontmatter part in the markdown file.

```
---
date: '8/03/2021'
title: 'Blogging with Gatsby and Markdown'
description: ''
---

Your first blogpost
```

# Creating an overview of blogposts

Let's query the blogpost data with the use of GraphQL. Export a function called `pageQuery`. Gatsby then passes your data as a prop called `data` in your React component. The result looks something like this:

```js
// src/pages/blog/index.js

import { Link, graphql } from 'gatsby';

const Blog = ({data}) => { // data contains the query result
    return data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={node.id}>...</Link>
    )
}

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

export default Blog;
```

If you're not familiar with GraphQL, visit [this introduction](https://graphql.org/learn/). As you can see, `gatsby-transformer-remark` pimped the `MarkdownRemark` type! We can access our frontmatter as we defined it in our mock blogpost.

Notice line 7. The `Link` component will make sure the right blogpost is opened in our `src/pages/blog/{MarkdownRemark.id}.js` page by passing the id.

# Creating a blogpost page

We can use the passed id in a new `pageQuery`. This query will fetch all the information of an individual blogpost. This query contains some more useful information because of the `gatsby-transformer-remark` plugin:

```js
// src/pages/blog/{MarkdownRemark.id}.js

import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {
  const { markdownRemark } = data;

  return ...
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
```

For example, notice `timeToRead` on line 20. This is automatically determined by our used plugin. There are some other useful fields you can check for yourself in the GraphQL playground I mentioned above.

The real star of the show however is `htmlAst`. This will allow the generated HTML to be modified with some custom `React` components. However, another package is needed for this.

```sh
# command line

yarn add rehype-react # or install with npm
```

This package will work out of the box without any problems. We just need to configure the Compiler to render React components with the generated HTML.

```js
// src/pages/blog/{MarkdownRemark.id}.js

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

const BlogPost = ({ data }) =>
    const { markdownRemark } = data;
    return <div className="blogpost">{renderAst(markdownRemark.htmlAst)}</div>;
};
```

If you just want to render your markdown file, you'll be happy with this. But where's the fun in that. We want to customize some components. The `rehypeReact` constructor allows for an optional key in its configuration object: `components`. In the components field you can pass an object containing key-value pairs with the HTML tag and its corresponding `React` component:

```js
// src/pages/blog/{MarkdownRemark.id}.js

const PrimaryHeader = ({ children }) => {
    return <h1 className='some-cool-class'>{children}</h1>
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {['h1']: PrimaryHeader}
}).Compiler;

...
```

After this change, your `h1` tag will be rendered with a custom `class`! This way, you can create a fully customized blogpost as I did! It would be quite frustrating to add components for each html tag. That's why I added a wrapper class on line 9 of the previous code block. You can add some custom CSS to descendants of this wrapper without having to render a component for each HTML tag you want to customize.

# Conclusion

Gatsby allows for a cool way to manage blogposts right in your project. As a bonus, your generated blog will be extremely fast. Thanks for reading my first ever blogpost and happy blogging!

If I'll continue blogging? That depends. Like the cool kids would say: "Looked cute, might delete later".
