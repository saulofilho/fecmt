import React from "react"
import Helmet from 'react-helmet';
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import './blogTemplate.scss'

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
      <div className="Blog-post container">
        <article className="post">
          <p className="post-date">
            {post.frontmatter.date}
          </p>
          <h1>
            {post.frontmatter.title}
          </h1>
          <div className="site-wrapper">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <p className="post-fonte">
              {post.frontmatter.fonte}
            </p>
            <div className="voltar">
              <Link to="/Noticias">⇦ Voltar</Link>
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
        date(formatString: "DD.MM.YYYY")
        title
        fonte
      }
    }
  }
`
