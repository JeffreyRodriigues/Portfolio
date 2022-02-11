import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Adress from "../../img/address.png"
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_aqsp5kh', 'template_mgf2qmo', formRef.current, 'user_1SLsdkePU9zXWFEsrcLPi')
      .then((result) => {
        console.log(result.text);
        setDone(true)
      }, (error) => {
        console.log(error.text);
      });

  }

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">
            Contatos
          </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +55 11 951669667
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              jeffrey.rodriigues@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Adress} alt="" className="c-icon" />
              Rua João Correia de Magalhães, 508A
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Qual é a sua história? </b> Sinta-se a vontade para conversar comigo!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Nome" name="user_name" />
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Assunto" name="user_subject" />
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
            <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Mensagem" name="message"></textarea>
            <button>Enviar</button>
            {done && "Obrigado...!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
