import { Home } from './pages/js/Home';
import { Carrinho } from './pages/js/Carrinho';
import { Comprar } from './pages/js/Comprar';



import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Sobre } from './pages/js/sobre';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/comprar" element={<Comprar />} />
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='produto/:idProduto' element={<Carrinho/>}/> 
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
