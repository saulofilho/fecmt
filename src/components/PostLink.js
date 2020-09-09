import React from "react"
import { Link } from "gatsby"
import './PostLink.scss'

const PostLink = ({ post }) => (
  <div className="post-item">
    <p className="date-info">
      {post.frontmatter.date}
    </p>
    <Link to={post.fields.slug} className="post-link">
      {post.frontmatter.title}
    </Link>
  </div>
)
export default PostLink
