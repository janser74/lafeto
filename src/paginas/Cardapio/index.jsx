import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";
import { useState } from "react";
import {
  filtrarProdutos,
  buscarProduto,
  NatalVarejo,
} from "../../service"
import Cards from '../../componentes/Cards';
import Categorias from '../../componentes/Categorias';
import CampoDeBusca from '../../componentes/CampoDeBusca';
import './style.css';

export default function Cardapio() {

  const [dadosFiltrados, setDadosFiltrados] = useState(NatalVarejo);
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");

  const [botaoClicado, setBotaoClicado] = useState("Natal Varejo");

  const handleBusca = (textoDigitado) => {
    setTextoBuscaDigitado(textoDigitado);
    textoDigitado.length >= 3 && setDadosFiltrados(buscarProduto(textoDigitado));
    setBotaoClicado("");
  };

  const handleFiltro = (categoria) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  };

  return (

    <div>
      <Topo />
      
      <main className="container_principal">
        <section className="secao-banner-cardapio ">
          <div className="titulo-banner-cardapio ">
            <h1>Cardápio</h1>
          </div>
         </section>

        <Categorias
            handleFiltro={handleFiltro}
            botaoClicado={botaoClicado}
        />
        <CampoDeBusca
            textoBuscaDigitado={textoBuscaDigitado}
            handleBusca={handleBusca}
                />
        <section >
            <div className="obs">
              <p>*Cardápio 'Natal corporativo' é especial para empresas.*</p>
            </div>

            <div className="container_cards">
              {dadosFiltrados.map((produto) => (
                <Cards key={produto.id} produto={produto} />
              ))}
            </div>
        </section>
      </main>
      <Rodape />
    </div>



  
  )
}
