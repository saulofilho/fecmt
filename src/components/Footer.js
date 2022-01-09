import React from "react"
import './Footer.scss'

const FooterWrapper = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="infos">
            <h4>Federação dos Empregados</h4>
            <h4>no Comércio do Estado de Mato Grosso</h4>
          </div>
          <div className="infos">
            <p>Av. Historiador Rubens de Mendonça, n.º 2254</p>
            <p>Edifício American Business Center</p>
            <p>Bosque da Saúde, Cuiabá - MT</p>
            <p>CEP: 78050-000</p>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default FooterWrapper
