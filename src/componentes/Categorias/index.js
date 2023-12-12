import "./Categorias.css";

const Categorias = ({ handleFiltro, botaoClicado }) => {
  return (
    <section className="secao_categorias">
      <div className="container_botoes">
        <button className={botaoClicado === "Natal Varejo" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Natal Varejo")}>
          <img className="icone" src="assets/natal.png" alt="icone natal"/>
          Natal Varejo
        </button>

        <button className={botaoClicado === "Natal Corporativo" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Natal Corporativo")} >
            <img className="icone" src="assets/natalc.png" alt="icone natal empresas"/>
          Natal Corporativo
        </button>
        <button className={botaoClicado === "Bolos" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Bolos")}>
          <img className="icone" src="assets/bolo.png" alt="icone bolos"/>
          Bolos
        </button>
        <button className={botaoClicado === "Outros" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Outros")}>
          <img className="icone" src="assets/presentes.png" alt="icone outros"/>
          Outros
        </button>

      </div>
    </section>
  );
};
export default Categorias;