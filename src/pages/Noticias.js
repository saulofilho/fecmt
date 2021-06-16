import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import './Noticias.scss'
import TypeChecker from 'typeco';
import loadable from '@loadable/component'
import PostSection from "../components/PostSection"

const SearchField = loadable(() => import('react-search-field'))
const Paginator = loadable(() => import('react-hooks-paginator'))

const Noticia = ({
  data: {
    allMarkdownRemark: { edges }
  },
}) => {
  const posts = edges.map(edge => ({...edge.node}))

  const pageLimit = 10;

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([...posts]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setData(data);
  }, [data]);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);

  const getMatchedList = (searchText) => {
    if (TypeChecker.isEmpty(searchText)) return posts;
    return posts.filter(post => post.frontmatter.title.toLowerCase().includes(searchText.toLowerCase()));
  };

  const onSearchClickExample = (value) => {
    setData(getMatchedList(value))
  }

  return (
  <Layout>
    <div className="Noticias container">
      <div className="noticias-header">
        <h1>Notícias</h1>
        <p>Clique sobre o título da notícia para saber mais.</p>
        <SearchField
          placeholder="Busque por palavras-chave"
          classNames="search"
          onSearchClick={onSearchClickExample}
        />
      </div>
      {!!currentData.length ? <PostSection posts={currentData} /> : <p className="search-result-none">Nenhuma palavra-chave encontrada.</p>}
      <Paginator
        totalRecords={data.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  </Layout>
  )
}

export default Noticia
export const pageQuery = graphql`
  query NoticiaQuery {
    allMarkdownRemark(
      filter: {frontmatter: {template: {eq: "BlogPost"}}}
      sort: { order: DESC, fields: [frontmatter___date] }
      ) {
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
            img
          }
        }
      }
    }
  }
`
