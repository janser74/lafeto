import "./Cards.css";

const Cards = ({ produto }) => {
  return (
    <div className="container">
      <figure>
        <img src={produto.imagem} alt={produto.nome} />
      </figure>
      <div className="container_informacoes">
        <div>
          <h3>{produto.nome}</h3>
          <small>{produto.categoria}</small>
          <p>{produto.descricao}</p>
        </div>
        <div>
          <span>{produto.preco}</span>
        </div>
      </div>
    </div>
  );
};
export default Cards;