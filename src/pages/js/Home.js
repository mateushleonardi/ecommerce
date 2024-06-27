import '../css/Home.css';

import { Header } from '../../components/Home/Navbar/js/Header';
import { Banner } from '../../components/Home/Banner/js/Banner';
import { ListarProdutos } from '../../components/Home/Produto/api/ListarProduto';



export function Home() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <h1>Lançamentos do dia:</h1>
      <ListarProdutos/>
    </div>

  );
}

