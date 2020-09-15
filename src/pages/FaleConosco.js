import React from "react"
import Layout from "../components/Layout"
import './FaleConosco.scss'
import { useForm } from "react-hook-form";

const FaleConosco = () => {
  const { register, errors } = useForm();

  return (
    <Layout>
    <div className="FaleConosco container">
      <div className="fale-header">
        <h1>Fale Conosco</h1>
        <p>
          Se você quer mais esclarecimentos a respeito dos nossos serviços,
          tem alguma reclamação ou sugestão, entre em contato conosco.
        </p>
      </div>
      <div className="fale-form">
          <form name="contact" method="POST" data-netlify="true" action ="/FormSucesso" netlify netlify-honeypot="bot-field">
            <fieldset>
              <input type="hidden" name="form-name" value="contact" />
              <section>
                <label>Assunto:
                <select name="role[]" className="select-css">
                  <option value="guias">Emissão de Guias</option>
                  <option value="cadastro">Cadastro</option>
                  <option value="assessoria">Assessoria</option>
                  <option value="diretoria">Diretoria</option>
                </select>
                </label>
              </section>
              <section>
                <label>Nome:
                  <input type="text" name="name" placeholder="Seu nome" ref={register({ required: true })}/>
                  <span>
                  {errors.name && "Nome requirido."}
                  </span>
                </label>
              </section>
              <section>
                <label>Email:
                  <input type="email" name="email" placeholder="Seu email" ref={register({ pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>
                  <span>
                    {errors.email && "Email requirido."}
                  </span>
                </label>
              </section>
              <section>
                <label>Telefone:
                  <input type="telephone" name="telefone" placeholder="Seu telefone" ref={register({ pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/ })}/>
                  <span>
                  {errors.telefone && "Telefone requirido."}
                  </span>
                </label>
              </section>
              <section>
                <label>Cidade:
                  <input type="text" name="cidade" placeholder="Sua cidade" ref={register({ required: true })}/>
                  <span>
                  {errors.cidade && "Cidade requirida."}
                  </span>
                </label>
              </section>
              <section>
                <label>Menssagem:
                  <textarea name="message" placeholder="Escreva a sua mensagem aqui" ref={register({ required: true })}></textarea>
                  <span>
                  {errors.message && "Mensagem requirida."}
                  </span>
                </label>
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
