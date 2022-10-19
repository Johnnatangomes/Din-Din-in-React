import Header from './Componentes/Header';
import Box from './Componentes/Box';
import Banner from './img/ilustra-banner.png';
import ilustra from './img/ilustra-poupando.png';
import ilustra2 from './img/ilustra-investimento.png';
import ilustra3 from './img/ilustra-independencia.png';
import Footer from './Componentes/Footer';

import "./styles/global.css"

function App() {

  const sendEmail = () => {
    alert('Email enviado com sucesso');
  }
  return (
    <div className="app">
      <Header />
      <main>
      <Box background="claro">
        <> 
        <div className='secao1'> 
        <div> 
        <h1> Educação
          Financeira é 
          tudo de bom
        </h1>
        <p> Vem comigo que te mostro por onde começar</p>
        <button className='button' onClick= {sendEmail}> quero saber mais </button>
        </div>
        <div> 
          <img className='banner' src={Banner} alt="banner"/>
        </div>
        </div>
       </>
      </Box>
      < Box background="escuro">
        <> 
      <div className='secao2'>
      <div>
      <img className='poupando' src={ilustra} alt="banner"/>
       <h2>Investimento para iniciantes</h2>
       <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
       <button> começar agora </button>
       </div>
       <div>
       <img className='investimento' src={ilustra2} alt="banner"/>
       <h2>Poupando e Rendendo</h2>
       <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
       <button> começar agora </button>
       </div>
       <div>
       <img className='independencia' src={ilustra3} alt="banner"/>
       <h2>Independência Financeira</h2>
       <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
       <button> começar agora </button>
       </div>
       </div>
       </>
       </Box>
     
      < Box background="claro">
        <> 
       <div className='secao3'> 
        <h2> O QUE FALAM SOBRE NÓS </h2>
        </div>
        </>
      </Box>
      < Box background="escuro">
       <h2> MAIS CONTEÚDO PARA VOCÊ </h2>
      </Box>
      < Footer/>
      </main>
    </div> 

  );
}

export default App;

//  Parentese se usa quando ouver mais de uma linha.