import * as React from 'react';

import Layout from '../components/layout';

import BlogContainer from '../components/blog/BlogContainer';

const Blog = () => {

  return (
    <Layout>
      <div className="blog-section">
        <div className="blog-section-head">
          <h2>All Posts</h2>
          <h4>All of my over-high quality posts are here...</h4>
        </div>

        <BlogContainer />      
      </div>
    </Layout>
  )

}

export default Blog;