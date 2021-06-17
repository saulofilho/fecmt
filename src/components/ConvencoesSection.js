import React, { useState } from 'react'
import './ConvencoesSection.scss'

const ConvencoesSection = ({
  convencoes = [],
}) => {
  const [orderName, setOrderName] = useState(false);
  const [orderDate, setOrderDate] = useState(false);

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

  function reorderName() {
    convencoes.reverse();
    setOrderName(!orderName);
  }

  function reorderDate() {
    convencoes.reverse();
    setOrderDate(!orderDate);
  }

  return (
    <div className="TableComparativeWrapper">
      <table>
        <thead>
          <tr>
            <th>
              Nome
              <button
                type="button"
                onClick={reorderName}
              >
                {orderName ? <i>↑</i> : <i>↓</i>}
              </button>
            </th>
            <th>
              Data
              <button
                type="button"
                onClick={reorderDate}
              >
                {orderDate ? <i>↑</i> : <i>↓</i>}
              </button>
            </th>
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
