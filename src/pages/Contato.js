import React from "react"
import Layout from "../components/Layout"
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot
} from 'react-netlify-forms'
import NumberFormat from "react-number-format"
import './Contato.scss'
import { useForm, Controller } from "react-hook-form";

const Contato = () => {
  const { register, handleSubmit, control, errors } = useForm({ mode: 'onBlur' })
  const netlify = useNetlifyForm({
    name: 'contato',
    action: '/FormSucesso',
    honeypotName: 'bot-field',
    onSuccess: (response, context) => {
      console.log("response", response)
      console.log("context", context)
      // console.log('datax', window.location.href = "https://localhost:8000/FormSucesso")
      // window.location = response.url;
    }
  })

  const onSubmit = (data) => netlify.handleSubmit(null, data)

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

  return (
    <Layout>
    <div className="FaleConosco container">
      <div className="fale-header">
        <h1>Contato</h1>
        <p>
          Se você quer mais esclarecimentos a respeito dos nossos serviços,
          tem alguma reclamação ou sugestão, entre em contato conosco.
        </p>
      </div>
      <div className="fale-form">
      <NetlifyFormProvider {...netlify}>
      <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
        <Honeypot />
        {netlify.success && (
          <p sx={{ variant: 'alerts.success', p: 3 }}>
            Thanks for contacting us!
          </p>
        )}
        {netlify.error && (
          <p sx={{ variant: 'alerts.muted', p: 3 }}>
            Sorry, we could not reach servers. Because it only works on Netlify,
            our GitHub demo does not provide a response.
          </p>
        )}
            <fieldset>
              <section>
                <label htmlFor='name'>Nome:
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    ref={register({ required: true })}
                  />
                  <span>
                  {errors.name && "Nome requirido."}
                  </span>
                </label>
              </section>
              <section>
                <label htmlFor='email'>Email:
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu email"
                    ref={register({
                      pattern: {
                        value: EMAIL_REGEX,
                      }
                    })}
                  />
                  <span>
                    {errors.email && "Email requerido."}
                  </span>
                </label>
              </section>
              <section>
                <label htmlFor='telephone'>Telefone:
                  <Controller
                    type="telephone"
                    name="telephone"
                    format="(##) ####-####"
                    placeholder="(65) 1234-5678"
                    as={NumberFormat}
                    control={control}
                  />
                  <span>
                  {errors.telefone && "Telefone requirido."}
                  </span>
                </label>
              </section>
              <section>
                <label htmlFor='cidade'>Cidade:
                  <input
                    type="text"
                    name="cidade"
                    placeholder="Sua cidade"
                    ref={register({ required: true })}
                  />
                  <span>
                  {errors.cidade && "Cidade requirida."}
                  </span>
                </label>
              </section>
              <section>
                <label htmlFor='message'>Menssagem:
                  <textarea
                    name="message"
                    placeholder="Escreva a sua mensagem aqui"
                    ref={register({ required: true })}
                  />
                  <span>
                  {errors.message && "Mensagem requirida."}
                  </span>
                </label>
              </section>
              <button
                type="submit"
              >
                Enviar
              </button>
            </fieldset>
      </NetlifyFormComponent>
    </NetlifyFormProvider>
          {/* <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/FormSucesso"
            netlify
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit()}
          >
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
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    ref={register({ required: true })}
                  />
                  <span>
                  {errors.name && "Nome requirido."}
                  </span>
                </label>
              </section>
              <section>
                <label>Email:
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu email"
                    ref={register({ pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                  />
                  <span>
                    {errors.email && "Email requirido."}
                  </span>
                </label>
              </section>
              <section>
                <label>Telefone:
                  <input
                    type="telephone"
                    name="telefone"
                    placeholder="Seu telefone"
                    ref={register({ pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/ })}
                  />
                  <span>
                  {errors.telefone && "Telefone requirido."}
                  </span>
                </label>
              </section>
              <section>
                <label>Cidade:
                  <input
                    type="text"
                    name="cidade"
                    placeholder="Sua cidade"
                    ref={register({ required: true })}
                  />
                  <span>
                  {errors.cidade && "Cidade requirida."}
                  </span>
                </label>
              </section>
              <section>
                <label>Menssagem:
                  <textarea
                    name="message"
                    placeholder="Escreva a sua mensagem aqui"
                    ref={register({ required: true })}
                  />
                  <span>
                  {errors.message && "Mensagem requirida."}
                  </span>
                </label>
              </section>
                <button type="submit">Enviar</button>
            </fieldset>
          </form> */}
      </div>
    </div>
  </Layout>
  )
}

export default Contato;
