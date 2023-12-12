import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";

import "./style.css";

export default function Sobre() {
  return (
    <div>

      <Topo />

      <main>
        <section className="secao-banner-sobre">
          <div className="titulo-banner-sobre">
            <h1>L'afeto</h1>
          </div>
        </section>

        <section className="container-secao-sobre-nos">
          <div className="limitar-secao">
            <h2>Conceito</h2>
            <p>
           Doces artesanais que carregam em seu sabor um toque
          super único de Fran, que foi construído com toda sua
          trajetória no mundo dos doces. L’afeto e todos os produtos
          da marca, tem história, tem afeto, tem amor e tem nostalgia.
          Nostalgia que nos remete a uma memória afetiva forte e que
          nos faz sentir um sabor ainda mais apurado do que a
          empresa oferece.
          A identidade criada traz todas essas questões e tem em sua
          parte visual rasuras que lembram o processo de bater um
          bolo na mão, como nossa vó/mãe fazia, de forma que dava
          pra ver o fundo da panela. Assim como a Fran vai fazer
          também, ao misturar os ingredientes dos seus produtos.
          A fonte manuscrita nos remete a questão artesanal e as cores
          ao principal produto da marca: chocolate.
            </p>
          </div>
        </section>

        <section className="container-secao-sobre-nos">
          <div className="limitar-secao">
            <h2>Nossos trabalhos</h2>
            <p>
            L’afeto é uma empresa de fabricação de doces. Focada em
            oferecer experiências positivas e únicas a seus cliente ela oferece
            mais do que apenas produtos.
            Temos cardápios especias nas datas comemorativas (Natal, Páscoa e Dia
            das mães)
            </p>
          </div>
        </section>

        <section className="container-secao-sobre-nos">
          <div className="limitar-secao">
            <h2>Pagamentos</h2>
            <span>Pix, boleto, Crédito via link</span>
            </div>
          </section>

        <section className="container-secao-sobre-nos">
          <div className="limitar-secao">
        
            <h2>Informações Gerais</h2>
            <p>
              Nossa produção é artesanal, com isso
              temos uma capacidade de produção
              limitada, temos um estoque de
              embalagens personalizadas que também
              é limitado.
              Antecipe seu pedido e garanta a
              sobremesa de Natal e os presentes para
              quem você ama!
            </p>
          </div>
        </section>

        <section className="container-secao-imagens">
          <div>
            <img src="assets/fran2.png" alt="fran" />
          </div>
        </section>
      </main>

      <Rodape />

    </div>
  );
}