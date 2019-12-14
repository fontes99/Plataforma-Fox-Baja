import React from 'react';
import '../css/App.css'
import {useSelector} from 'react-redux'

function Membros() {

  const isLogged = useSelector(state => state.isLogged);

  return(

    <div className='card-template' style={{textAlign:'center'}}>
      <h1>Lista de membros com fotos e tals</h1>
      {isLogged ? <h1>Está Logado, pode editar suas coisas</h1> : ''}
    </div>

    );
};

export default Membros;
