import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import './Convencoes.scss'
import TypeChecker from 'typeco';
import loadable from '@loadable/component'
import ConvencoesSection from "../components/ConvencoesSection"

const SearchField = loadable(() => import('react-search-field'))

const Convencoes = ({
  data: {
    allMarkdownRemark: { edges }
  },
}) => {
  const convencoes = edges.map(edge => ({ ...edge.node }))

  console.log("convencoes--------->", convencoes)

  const [data, setData] = useState([...convencoes]);

  useEffect(() => {
    setData(data);
  }, [data]);

  const getMatchedList = (searchText) => {
    if (TypeChecker.isEmpty(searchText)) return convencoes;
    return convencoes.filter(post => post.frontmatter.title.toLowerCase().includes(searchText.toLowerCase()));
  };

  const onSearchClickExample = (value) => {
    setData(getMatchedList(value))
  }

  return (
    <Layout>
      <div className="Convencoes container">
        <div className="convencoes-header">
          <h1>Convenções</h1>
          <p>Clique sobre o título da notícia para saber mais.</p>
          <SearchField
            placeholder="Busque por palavras-chave"
            classNames="search"
            onSearchClick={onSearchClickExample}
          />
        </div>
        <ConvencoesSection convencoes={convencoes} />
      </div>
    </Layout>
  )
}

export default Convencoes
export const pageQuery = graphql`
  query ConvencoesQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            name
            arquivo
          }
        }
      }
    }
  }
`
