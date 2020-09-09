import React from "react"
import { Link } from "gatsby"
import './PostLink.css'

const PostLink = ({ post }) => (
  <div>
          {post.frontmatter.date}
      {post.frontmatter.fonte}
    <ul>
      <li>
        <Link to={post.fields.slug} className="post-link">
          {post.frontmatter.title}
        </Link>
      </li>
    </ul>
  </div>
)
export default PostLink
