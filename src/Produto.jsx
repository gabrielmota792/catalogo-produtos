function Produto({ nome, preco, imagem }) {
  return (
    <div className="produto">
      <img src={imagem} alt={nome} />

      <h2>{nome}</h2>

      <p>R$ {preco}</p>

      <button>Comprar</button>
    </div>
  );
}

export default Produto;