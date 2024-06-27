import { Carrinho } from "../../../../../pages/js/Carrinho";
import {BrowserRouter, Route, Routes} from "react-router-dom";


export function ClickButton(){


    return (
        <BrowserRouter>
            <Routes>
                <Route path= "/produto/:idProduto" element={<Carrinho/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}
