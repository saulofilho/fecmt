import React from "react"
import Layout from "../components/Layout"
import './FormSucesso.scss'

const FormSucesso = () => {
  return (
    <Layout>
    <div className="FormSucesso container">
      <div className="form-header">
        <h1>Mensagem enviada com sucesso.</h1>
        <p>
          Logo entraremos em contato
        </p>
      </div>
    </div>
  </Layout>
  )
}

export default FormSucesso;
