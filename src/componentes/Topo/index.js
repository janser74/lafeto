import { Link } from "react-router-dom";

import './style.css'

export default function Topo() {
  return(
    <header>
      <div className="limitar-secao">
        <img src="assets/logo.png" alt="logomarca"/>
        <nav>
          <Link className="link-topo" to="/">Inicio</Link>
          <Link className="link-topo" to="/cardapio">Cardápio</Link>
          <Link className="link-topo" to="/sobre">Saiba mais</Link>
        </nav>
        <div className="contato">
          <a href='https://api.whatsapp.com/send/?phone=5531993970276&text&type=phone_number&app_absent=0' target="_blank" rel="noreferrer"><img src='assets/whatsapp.png' alt='logomarca'/></a>
        </div>
      </div>
    </header>
  )
}