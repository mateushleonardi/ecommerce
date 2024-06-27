import  "../css/Banner.css";
import { ButtonBaseDemo } from "./buttom";

export function Banner(){
    return (
        <div className="Banner">
            <h1><h1>Bem <br/> Vindos!</h1></h1>
            <div>
            <h1>Venha...<br/>e descubra nosso catálogo!!</h1> 
               <ButtonBaseDemo />
               </div> 
        </div>


    )
}