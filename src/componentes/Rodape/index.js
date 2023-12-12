import './style.css'

export default function Rodape() {
  return(
    <footer>
      <div className='limitar-secao container-logo-informacoes'>
        <div className='logo'>
          <img src='assets/logo.png' alt='logomarca'/>
        </div>
       
        <div>
          <a href='https://api.whatsapp.com/send/?phone=5531993970276&text&type=phone_number&app_absent=0' target="_blank" rel="noreferrer"><img src='assets/whatsapp.png' alt='logomarca'/></a>
          <p>Faça seu pedido!</p>
        </div>

        <div>
        <img src='assets/localizacao.png' alt='mapa' />
        <p>Belo Horizonte, Contagem e região</p>
        </div>

        <div>
        <a href='https://www.instagram.com/lafetoconfeitaria/' target="_blank" rel="noreferrer"><img src='assets/instagram.png' alt='logomarca'/></a>
        <p>@lafetoconfeitaria</p>
        </div>

      </div>
      <div className='limitar-secao direito-autoral'>
        <p>L'afeto. Orgulhosamente desenvolvido por "Janser Souza"</p>
      </div>
    </footer>
  )
}