import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <li>
    <Link to={post.fields.slug} className="post-link"> {post.frontmatter.title}</Link>
  </li>
)
export default PostLink
