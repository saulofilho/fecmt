import React from "react"
import { Link } from 'gatsby'
import './FormSucesso.scss'
import Logo from '../../static/assets/logo.png'

const FormSucesso = () => {
  return (
    <div className="FormSucesso container">
      <div className="form-header">
        <h1>Mensagem enviada com sucesso.</h1>
        <p>
          Logo entraremos em contato.
        </p>
      </div>
      <Link to={"/"}>
        <img src={Logo} alt="logo blog" />
      </Link>
    </div>
  )
}

export default FormSucesso;
