import React from "react"
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { PlusCircle } from 'react-feather'
import Layout from "../components/Layout"
import PostLink from "../components/PostLink"
import Carousel from "../components/Carousel"
import './Homologacoes.scss'

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
  limit = 5
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
        <section className="noticias-home container">
          <h3>Notícias</h3>
          <div className="posts-list">
            {Posts}
          </div>
          <Link to={"/Noticias"}>
            <PlusCircle
              className="plus"
            />
          </Link>
        </section>
        <section className="homologacoes-home container">
          <h3>Homologações</h3>
          <p>
            "O pagamento e a homologação das parcelas constante do instrumento de
            rescisão contratual ou recibo de quitação deverá ser efetuado nos seus
            respectivos sindicatos ou conforme determina o Art. 477. Cláusula nona cct."
          </p>
        </section>
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
