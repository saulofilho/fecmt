import React from "react"
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import PostLink from "../components/PostLink"
import Carousel from "../components/Carousel"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
  limit = 3
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .slice(0, limit)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
        <Helmet>
          <title>{site.siteMetadata.title}</title>
          <meta name="description" content={site.siteMetadata.description} />
        </Helmet>
        <Carousel />
        <div className="noticiais-home container">
          <h3>Notícias</h3>
          <div className="posts-list">
            {Posts}
          </div>
        </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            fonte
          }
        }
      }
    }
  }
`
