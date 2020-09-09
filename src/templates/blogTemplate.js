import React from "react"
import Helmet from 'react-helmet';
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Template({
  data,
}) {

  const post = data.markdownRemark

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={post.frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
              <h1 className="post-title">{post.frontmatter.title}</h1>
          <div className="site-wrapper">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="back-home">
              <Link to="/">⇦ back home</Link>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`
