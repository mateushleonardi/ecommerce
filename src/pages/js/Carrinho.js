import '../css/Home.css';
import { HeaderRight } from '../../components/Home/Navbar/js/HeaderRight';
import { HeaderLeft } from '../../components/Home/Navbar/js/HeaderLeft';


export function Carrinho() {
  return (
    <div className="App">
      <div className='Header'>
      <HeaderRight/>
      <HeaderLeft click1="Sobre" click2="Serviços" click3="Home"/> 
      </div>
        <h1>Carrinho</h1>
    </div>  
  );
}

