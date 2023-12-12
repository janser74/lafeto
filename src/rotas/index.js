import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../paginas/Home';
import Cardapio from '../paginas/Cardapio';
import Sobre from '../paginas/Sobre';

export default function Rotas() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cardapio' element={<Cardapio />}/>
        <Route path='/sobre' element={<Sobre />}/>
      </Routes>
    </BrowserRouter>
  )
}