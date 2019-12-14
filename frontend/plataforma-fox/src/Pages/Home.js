import React from 'react';
import '../css/App.css'
import {useSelector} from 'react-redux'

function Home() {

  const isLogged = useSelector(state => state.isLogged);

  return(

    <div className='card-template' style={{textAlign:'center'}}>
      <h1>faala tu</h1>
      {isLogged ? <h1>Logado</h1> : <h1>clique em entrar</h1>}
    </div>

    );
};

export default Home;
