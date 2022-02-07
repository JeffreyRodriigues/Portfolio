import "./about.css"
import Award from "../../img/award.jpg"
import Mea from "../../img/mea.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Mea} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre mim</h1>
        <p className="a-sub">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quasi, beatae veritatis id porro quibusdam ex facilis.</p>
        <p className="a-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus maiores omnis provident tenetur quia sed facilis temporibus sit quisquam eius, animi harum enim ipsum in necessitatibus minus dolore nesciunt eaque.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International GitHub</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae aliquam odit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
