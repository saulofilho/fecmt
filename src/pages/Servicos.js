import React from "react"
import Layout from "../components/Layout"
import './Servicos.css'

const Servicos = () => {
  return (
    <Layout>
    <div className="Servicos container">
      <div className="servicos-header">
        <h1>Serviços</h1>
        <p>
          O que fazemos por você?
        </p>
      </div>
      <div className="servicos-text">
        <p>
          A Federação dos Comerciários representa os Sindicatos e os Trabalhadores inorganizados em Sindicatos na luta pelos seus direitos, nas convenções coletivas, e pela qualificação da categoria, permanentemente. Oferece todo o suporte necessário aos Sindicatos filiados para sua estruturação e à manutenção do emprego no comércio, desde a denúncia da inadequação do ambiente de trabalho até a garantia do cumprimento de todos os direitos trabalhistas.
        </p>
      </div>
    </div>
  </Layout>
  )
}

export default Servicos;
