import React from 'react'
import './PostSection.scss'

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
          <a href={convencao.frontmatter.arquivo} download>
            <p>{convencao.frontmatter.arquivo}</p>
          </a>
        </div>
      ))}
    </>
  )
}

export default ConvencoesSection
