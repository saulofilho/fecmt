import React from "react"
import Layout from "../components/Layout"
import './ConhecaMatoGrosso.css'

const ConhecaMatoGrosso = () => {
  return (
<Layout>
    <div className="Conheca container">
      <div className="conheca-header">
        <h1>Conheça Mato Grosso</h1>
        <p>
          Conheça a História e a Cultura da capital de Mato Grosso.
          Confira informações sobre os aspectos culturais, históricos,
          geográficos, populacionais e sócio-econômicos do Estado de Mato Grosso.
        </p>
      </div>
      <div className="conheca-text">
        <div className="post-item">
          <p className="date-info">
            Artesanato
          </p>
          <a href="http://www.coisasdematogrosso.com.br/" className="post-link">
            Artesanato Mato-grossense
          </a>
        </div>
        <div className="post-item">
          <p className="date-info">
            Festas Religiosas
          </p>
          <a href="https://www.visiteobrasil.com.br/brasil/centro-oeste/mato-grosso/festas-populares" className="post-link">
            Folclore e Festas do Mato Grosso
          </a>
        </div>
        <div className="post-item">
          <p className="date-info">
            Literatura
          </p>
          <a href="http://www2.unemat.br/literaturamt/" className="post-link">
            História, Prosa e Verso
          </a>
        </div>
        <div className="post-item">
          <p className="date-info">
            Teatro
          </p>
          <a href="https://portalmatogrosso.com.br/teatro-em-mato-grosso/" className="post-link">
            Representações Teatrais
          </a>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default ConhecaMatoGrosso;
