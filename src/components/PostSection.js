import React from 'react'
import './PostSection.scss'
import { Link } from 'gatsby'

const PostSection = ({
  posts = [],
}) => {
  return (
    <>
      {posts.map(post => (
        <div className="post-item" key={post.id}>
          <p className="date-info">
            {post.frontmatter.date}
          </p>
          <Link to={post.fields.slug} className="post-link">
            {post.frontmatter.title}
          </Link>
          <p className="excerpt">
            {post.excerpt}
          </p>
        </div>
      ))}
    </>
  )
}

export default PostSection
