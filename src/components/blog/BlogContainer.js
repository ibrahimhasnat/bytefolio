import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import './blog.css'

const BlogContainer = () => {
  return (
    <React.Fragment>
      <div className="blog-cards">
        <div className="blog-card">
          <div className="blog-img">
            <StaticImage src="../../images/blog/blog-1.jpg" class="post-thumb" alt="Downloaded from Unsplash" />
          </div>
          <div className="blog-content">
            <h2>Title One</h2>
            <p>I am on writer's block. That's why I can't produce any content right now.</p>            
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-img">
            <StaticImage src="../../images/blog/blog-2.jpg" class="post-thumb" alt="Downloaded from Unsplash" />
          </div>
          <div className="blog-content">
            <h2>Title Two</h2>
            <p>I am on writer's block. That's why I can't produce any content right now.</p>            
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-img">
            <StaticImage src="../../images/blog/blog-3.jpg" class="post-thumb" alt="Downloaded from Unsplash" />
          </div>
          <div className="blog-content">
            <h2>Title Three</h2>
            <p>I am on writer's block. That's why I can't produce any content right now.</p>            
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-img">
            <StaticImage src="../../images/blog/blog-4.jpg" class="post-thumb" alt="Downloaded from Unsplash" />
          </div>
          <div className="blog-content">
            <h2>Title Four</h2>
            <p>I am on writer's block. That's why I can't produce any content right now.</p>            
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BlogContainer;
