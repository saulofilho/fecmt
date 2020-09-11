import React from "react"
import Layout from "../components/Layout"
import './FaleConosco.scss'
import { useForm } from "react-hook-form";

const FaleConosco = () => {
  return (
    <Layout>
    <div className="FaleConosco container">
      <div className="fale-header">
        <h1>Fale Conosco</h1>
        <p>
          Se você quer mais esclarecimentos a respeito dos nossos serviços,
          <br/>
          tem alguma reclamação ou sugestão, entre em contato conosco.
        </p>
      </div>
      <div className="fale-form">
          <form name="contact" method="POST" data-netlify="true" action ="/FormSucesso" netlify netlify-honeypot="bot-field">
            <fieldset>
              <input type="hidden" name="form-name" value="contact" />
              <section>
                <label>Assunto: </label>
                <select name="role[]" className="select-css">
                  <option value="guias">Emissão de Guias</option>
                  <option value="cadastro">Cadastro</option>
                  <option value="assessoria">Assessoria</option>
                  <option value="diretoria">Diretoria</option>
                </select>
              </section>
              <section>
                <label>Nome: </label>
                <input type="text" name="name" placeholder="Seu nome" />
              </section>
              <section>
                <label>Email: </label>
                <input type="email" name="email" placeholder="Seu email" />
              </section>
              <section>
                <label>Telefone: </label>
                <input type="telefone" name="telefone" placeholder="Seu telefone" />
              </section>
              <section>
                <label>Cidade: </label>
                <input type="cidade" name="cidade" placeholder="Sua cidade" />
              </section>
              <section>
                <label>Menssagem: </label>
                <textarea name="message" placeholder="Escreva a sua mensagem aqui"></textarea>
              </section>
                <button type="submit">Enviar</button>
            </fieldset>
          </form>
      </div>
    </div>
  </Layout>
  )
}

export default FaleConosco;
