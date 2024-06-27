import '../css/Home.css';
import { HeaderRight } from '../../components/Home/Navbar/js/HeaderRight';
import { HeaderLeft } from '../../components/Home/Navbar/js/HeaderLeft';

export function Sobre() {
  return (
    <div className="App">
    <div className='Header'>
    <HeaderRight/>
    <HeaderLeft click1="Home" click2="Serviços" click3="Carrinho"/> 
    </div>
      <h1>Sobre Nós</h1>
    </div>
  );
}

