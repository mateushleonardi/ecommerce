import { Carrinho } from "../../pages/Carrinho";
import { Home } from "../../pages/js/Home";
import { Sobre } from "../../pages/js/sobre";
import { ClickButton } from "../../components/Home/Banner/js/OnClickEvent";

import {BrowserRouter, Route, Routes} from "react-router-dom";



export function HomeRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<ClickButton/>}/>
                <Route path="/produto" element={<Carrinho/>}/>
                <Route path="/produto/comprar" element={<Carrinho/>}/>
                <Route path="/sobre" element={<Sobre />} />
            </Routes>        
        </BrowserRouter>
    )
}