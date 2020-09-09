import React from 'react'
import './PostSection.scss'
import { Link } from 'gatsby'

const PostSection = ({
  posts = [],
}) => {
  return (
    <div className="posts-section">
      <div className="post-section-grid">
        {posts.map(post => (
          <div className="post-item" key={post.id}>
            <p className="date-info">
              {post.frontmatter.date}
            </p>
            <Link to={post.fields.slug} className="post-link">
              {post.frontmatter.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostSection
