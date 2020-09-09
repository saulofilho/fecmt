import React, { useState } from "react"
import Layout from "../components/Layout"
import './Noticias.scss'
import TypeChecker from 'typeco';
import loadable from '@loadable/component'
import PostSection from "../components/PostSection"

const SearchField = loadable(() => import('react-search-field'))

const Noticia = ({
  data: {
    allMarkdownRemark: { edges }
  },
}) => {
  const posts = edges.map(edge => ({...edge.node}))

  const [onSearchClickExampleList, setOnSearchClickExampleList] = useState([...posts])

  const getMatchedList = (searchText) => {
    if (TypeChecker.isEmpty(searchText)) return posts;
    return posts.filter(post => post.frontmatter.title.toLowerCase().includes(searchText.toLowerCase()));
  };

  const onSearchClickExample = (value) => {
    setOnSearchClickExampleList(getMatchedList(value))
  }

  return (
  <Layout>
    <div className="Noticia container">
      <h1>Noticia.</h1>
      <SearchField
        placeholder="Busque por palavras-chave"
        classNames="test-class"
        onSearchClick={onSearchClickExample}
      />
      <div>
        <PostSection posts={onSearchClickExampleList} />
      </div>
    </div>
  </Layout>
  )
}

export default Noticia
export const pageQuery = graphql`
  query NoticiaQuery {
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
