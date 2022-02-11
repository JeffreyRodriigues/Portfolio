import { useState } from "react";
import "./progressBar.css"

const Progress = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  )
}

const ProgressBar = () => (
  <>
    <div className="pb">
      <h1 className="pb-title"> Minhas habilidades</h1>
      <div className="pb-habilities">
        <h4 className="pb-desc">Java
          <Progress done="80" /></h4>
        <h4 className="pb-desc">Spring
          <Progress done="80" /></h4>
        <h4 className="pb-desc">Node.js
          <Progress done="70" /></h4>
        <h4 className="pb-desc">Html/Css
          <Progress done="90" /></h4>
        <h4 className="pb-desc">Javascript
          <Progress done="75" /></h4>
        <h4 className="pb-desc">React.JS
          <Progress done="85" /></h4>
        <h4 className="pb-desc">Material UI
          <Progress done="70" /></h4>
        <h4 className="pb-desc">GitHub
          <Progress done="75" /></h4>
      </div>

    </div>
  </>
);
export default ProgressBar;