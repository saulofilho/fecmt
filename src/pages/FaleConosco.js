import React from "react"
import Layout from "../components/Layout"
import './FaleConosco.scss'

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
          <form name="contact" method="POST" data-netlify="true" action ="/Noticias">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
      </div>
    </div>
  </Layout>
  )
}

export default FaleConosco;
