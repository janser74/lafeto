import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";
import { Link } from "react-router-dom";


import './style.css'

export default function Home() {
  return(
    <div>
      
      <Topo />
    

      <main>
        <section className="secao-banner">
          <div className="texto-banner">
          <p>Oi<span>,</span> eu sou a Fran</p>
          </div>
        </section>

        <section className="secao">
          <img src="assets/fran3.jpeg" alt="fran capa" />
          <div className="texto-secao">
            <p>
            Sim, sou a Francielle Lorraine, mas pode me chamar de Fran!
            Apaixonada por Gastronomia me encontrei na Confeitaria, é aqui que o meu coração pulsa mais forte, aqui que entrego todo meu afeto e minha energia.
            Sou responsável pela produção e atendimento aqui do ateliê L'afeto, e claro, por depositar doses generosas de amor e afeto em cada pedido.
            Preparei um cardápio repleto de delícias, a fim de te proporcionar uma experiência única, afinal, o meu lema é <strong>"Com amor e afeto, farei seu doce predileto!"</strong>
            </p>
            <span>Seja bem vindo ao mundo L'afeto!</span>
          </div>
        </section>

        <section className="secao-nosso-cardapio">
          <div className="texto-secao-nosso-cardapio">      
              <Link className="link-info" to="/cardapio"><h2>VEJA NOSSO CARDÁPIO</h2></Link>
              <span>É de deixar com água na boca</span>
              <p>
                Trabalhamos com variados cardápios e variados produtos. Lançamentos especiais em cada data comemorativa (NATAL, PÁSCOA E DIA DAS MÃES)
              </p>
          </div>
          <img src="assets/cardapio1.png" alt="cardapio variado" />
        </section>

       

      </main>

      <Rodape />

    </div>
  )
}