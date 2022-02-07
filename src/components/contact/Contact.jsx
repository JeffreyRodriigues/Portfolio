import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Adress from "../../img/address.png"
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

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
            Let's discuss yout project
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
            <b>What's your story? </b> sit amet consectetur adipisicing elit. Aut mollitia possimus, consequuntur labore a blanditiis delectus sunt qui.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button>Enviar</button>
            {done && "Obrigado...!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
