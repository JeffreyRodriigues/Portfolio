import About from "./components/about/About.jsx";
import Intro from "./components/intro/Intro.jsx";
import ProductList from "./components/productList/ProductList.jsx";
import Contact from "./components/contact/Contact.jsx";
import { useContext } from "react";
import { ThemeContext } from "./context";
import Toggle from "./components/toggle/Toggle.jsx";

const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};


export default App;
