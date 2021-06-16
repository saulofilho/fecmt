import React from 'react'
import './PostSection.scss'
import { Link } from 'gatsby'

const ConvencoesSection = ({
  convencoes = [],
}) => {
  return (
    <>
      {convencoes.map(convencao => (
        <div className="post-item" key={convencao.id}>
          <p className="date-info">
            {convencao.frontmatter.date}
          </p>
          <p className="excerpt">
            {convencao.frontmatter.name}
          </p>
          <p className="excerpt">
            {convencao.frontmatter.arquivo}
          </p>
          <a href={convencao.frontmatter.arquivo} download>
          <a href={convencao.frontmatter.arquivo} />
          </a>
        </div>
      ))}
    </>
  )
}

export default ConvencoesSection
