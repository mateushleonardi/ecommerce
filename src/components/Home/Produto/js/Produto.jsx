import '../css/Produto.css';
import { useNavigate } from 'react-router-dom';


export function CardProduto({ idProduto, nome, preco, descricao, linkImagem }) {
  const navigate = useNavigate();
  const handleClick = ({ idProduto, nomeProduto, precoProduto, descricaoProduto, linkImagem }) => {
navigate(`/produto/${idProduto}`, { state: { idProduto, nomeProduto, precoProduto, descricaoProduto, linkImagem } });
  }

  return (
 <div>
    <div className="container"
              style={{
                cursor:"pointer"
              }}  
                onClick={() => 
                handleClick(idProduto, nome, preco, descricao, linkImagem)}
              >
      <div className='box'>
          <img src={linkImagem} style={{width:"100px"}} alt={nome} />
          <h3>{nome}</h3>
          <p>{descricao}</p>
          <p>R$ {preco}</p>
          <button 
          className='comprar' 
          onClick={() => 
            handleClick(idProduto, nome, preco, descricao, linkImagem)}
          >
            Comprar
          </button>
      </div>
    </div>
 </div>
    );
}

