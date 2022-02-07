import "./about.css"
import Award from "../../img/award.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
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
