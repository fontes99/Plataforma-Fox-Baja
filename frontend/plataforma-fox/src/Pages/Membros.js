import React from 'react';
import {useSelector} from 'react-redux'

import '../css/App.css'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

import membros from '../members-mock.json'

import templateImg from '../images/img.png'

function Membros() {

  console.log(membros)

  const isLogged = useSelector(state => state.isLogged);

  const displayMembros = (membros) =>{
    return(
      membros.map(membro=>(
        <Card style={{ width: '18rem' }}>
          
          <Card.Img variant="top" src={templateImg} alt='template'/>

          <Card.Body>
            <Card.Title>{membro.nome}</Card.Title>

            <ListGroup className="list-group-flush">
              <ListGroupItem>{membro.descri}</ListGroupItem>
              <ListGroupItem>{membro.cargo}</ListGroupItem>
              <ListGroupItem>{membro.entrada}</ListGroupItem>
            </ListGroup>
            
            <Button variant="dark" style={{margin:'15px 5px 0px 0px'}}>Go somewhere</Button>
            
            {isLogged ? <Button variant="dark" style={{margin:'15px 0px 0px 5px'}}>Edit</Button> : ''}
          </Card.Body>
          
        </Card>
      ))
    )

  }

  return(
    
    <div className='card-template' style={{textAlign:'center'}}>

      <div>
        <h1 className='card-title' style={{margin:'0px 0px 70px 0px'}}>Membros da equipe</h1>
      </div>

      <div className='membros-card'>
        {displayMembros(membros)}
      </div>

    </div>

    );
};

export default Membros;
