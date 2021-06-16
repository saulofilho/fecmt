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

  const [data, setData] = useState([...convencoes]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setData(data);
    setCurrentData(data)
  }, [data]);

  const getMatchedList = (searchText) => {
    if (TypeChecker.isEmpty(searchText)) return convencoes;
    return convencoes.filter(post => post.frontmatter.name.toLowerCase().includes(searchText.toLowerCase()));
  };

  const onSearchClickExample = (value) => {
    setData(getMatchedList(value))
  }

  return (
    <Layout>
      <div className="Convencoes container">
        <div className="convencoes-header">
          <h1>Convenções Coletivas</h1>
          <p>Procure a convenção que você precisa:</p>
          <SearchField
            placeholder="Busque por uma palavras-chave"
            classNames="search"
            onSearchClick={onSearchClickExample}
          />
        </div>
        {!!currentData.length ? <ConvencoesSection convencoes={currentData} /> : <p className="search-result-none">Nenhuma palavra-chave encontrada.</p>}
      </div>
    </Layout>
  )
}

export default Convencoes
export const pageQuery = graphql`
  query ConvencoesQuery {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "ConvencoesPost" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      ) {
      edges {
        node {
          fields {
            slug
          }
          id
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
