import "../css/Header.css";
import { HeaderLeft } from "./HeaderLeft";
import { HeaderRight } from "./HeaderRight";

export function Header(){
    return (
        <div className="Header">
        <HeaderRight/>
        <HeaderLeft click1="Sobre" click2="Serviços" click3="Carrinho"/> 
        </div>
    )


}