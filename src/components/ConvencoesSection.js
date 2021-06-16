import React from 'react'
import './ConvencoesSection.scss'

const ConvencoesSection = ({
  convencoes = [],
}) => {

  const TableRow = ({ row }) => (
    <tbody>
      <tr>
        <td>{row.frontmatter.name}</td>
        <td>{row.frontmatter.date}</td>
        <td>
          <a href={row.frontmatter.arquivo} download>
            <p>Baixe aqui</p>
          </a>
        </td>
      </tr>
    </tbody>
  );

  return (
    <div className="TableComparativeWrapper">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Download</th>
          </tr>
        </thead>
        {
          convencoes.map((row, index) => (
            <TableRow row={row} index={index} key={row.id} />
          ))
        }
      </table >
    </div>
  )
}

export default ConvencoesSection
