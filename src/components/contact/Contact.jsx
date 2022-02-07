import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Adress from "../../img/address.png"

const Contact = () => {
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
          <form>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
