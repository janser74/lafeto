import "./CampoDeBusca.css";

const CampoDeBusca = ({ textoBuscaDigitado, handleBusca }) => {
  return (
    <div className="areaCampo">
      <img className="icone" src="assets/lupa.png" alt="icone lupa"/>
      <input
        type="text"
        value={textoBuscaDigitado}
        onChange={(event) => handleBusca(event.target.value)}
        placeholder="Pesquise aqui um dos produtos do nosso cardápio"
      />
    </div>
  );
};

export default CampoDeBusca;