import "./about.css"
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
        <p className="a-sub">Olá, sou o Jeffrey, tenho 29 anos, e sou casado com a Pri.</p>
        <p className="a-desc">
          Sou um entusiasta da tecnologia, gamer amador, eu amo viajar, sou louco por desafios, ler livros, cuidar das minhas plantas, além de ser um cozinheiro de mão cheia. Há alguns meses, eu concluí um Bootcamp da Generation Brasil, e me tornei um Desenvolvedor Full Stack Java Junior. Saí uma pessoa nova deste ambiente, e descobri que amo programar! Mas além de aprender a desenvolver, também houve treinamento das soft skills, na qual tem extrema importância, e foi essencial para o meu desenvolvimento tanto profissional quanto pessoal.

        </p>
      </div>
    </div>
  );
};

export default About;
