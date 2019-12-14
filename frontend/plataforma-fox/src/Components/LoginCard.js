import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {login} from '../actions'
// import History from '../History'

import '../css/App.css'



function LoginCard(){
 
    const disptach = useDispatch();

    function entrar(e){
        e.stopPropagation();
        e.preventDefault();
        disptach(login());
    }

    return(
        <div className='card-template'>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control size='lg' type="email" placeholder="Entrar com Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control size='lg' type="password" placeholder="Senha" />
                </Form.Group>

                <Button onClick={entrar} variant="primary" type="submit" style={{margin:'20px'}}>
                    Entrar
                </Button>

                <Link to='/cadastro'>
                    <Button variant="primary" style={{margin:'20px'}}>
                        Cadastrar-se
                    </Button>
                </Link>

            </Form>
        </div>
    );

};

export default LoginCard;