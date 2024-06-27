import { useEffect, useState } from "react";
import { api } from "./api";
import { toast } from "react-toastify";
import { CardProduto } from "../js/Produto";
import '../css/Produto.css';

export function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buscarProdutos(); // eslint-disable-next-line
  }, []);

  async function buscarProdutos() {
    try {
      const response = await api.get("/productlistbyremark/home");
      setProdutos(response.data);
    } catch (error) {
      mensagemDeErro("Erro para buscar os produtos.");
    }
  }

  function mensagemDeErro(mensagem = "Mensagem de erro") {
    toast.error(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
   <div className="container-produtos">
    {produtos.map((produto) => (
        <CardProduto 
        idProduto={produto.id}
        nome={produto.title}
        preco={produto.price}
        linkImagem={produto.image}
        descricao={produto.category}     
        />  
        ))};
   </div>
  );
}

