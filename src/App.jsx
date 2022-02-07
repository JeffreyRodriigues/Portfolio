import About from "./components/about/About.jsx";
import Intro from "./components/intro/Intro.jsx";
import ProductList from "./components/productList/ProductList.jsx";
import Contact from "./components/contact/Contact.jsx";
import Toogle from "./components/toogle/Toogle.jsx";

const App = () => {
  return <div>
    <Toogle />
    <Intro />
    <About />
    <ProductList />
    <Contact />
  </div>
};


export default App;
