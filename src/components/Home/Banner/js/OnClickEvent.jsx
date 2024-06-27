import { Carrinho } from "../../../../pages/js/Carrinho";
import { ButtonBaseDemo } from "./buttom";
import {BrowserRouter, Route, Routes} from "react-router-dom";


export function ClickButton(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sobre" element={<ButtonBaseDemo/>}>

                </Route>
            </Routes>
        </BrowserRouter>
    )

}
