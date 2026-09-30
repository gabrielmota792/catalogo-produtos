import React from 'react';
import Produto from './Produto';
import './estilos.css';

import camisa from './assets/camisa.jpg';
import calca from './assets/calca.jpg';
import tenis from './assets/tenis.jpg';

function App(){
  const produtos = [
    {nome: 'Camisa', preco: 49.9, imagem: camisa },
    { nome: 'Calça', preco: 89.9, imagem: calca},
    { nome: 'Tênis', preco: 129.9, imagem: tenis}
  ];

  return (
  <div className="catalogo">
    {produtos.map((p, i) =>(
      <Produto key={i} {...p}/>
    ))}
  </div>
  );
}

export default App;