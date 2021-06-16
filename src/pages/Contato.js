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
      window.location.href = "https://fecmt.netlify.app/FormSucesso";
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
                    format="(##) # ####-####"
                    placeholder="(65) 9 1234-5678"
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
      </div>
    </div>
  </Layout>
  )
}

export default Contato;
