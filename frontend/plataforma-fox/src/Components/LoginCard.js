import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import '../css/App.css'



function LoginCard(){
 
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

                <Button formAction='/' variant="primary" type="submit" style={{margin:'20px'}}>
                    Entrar
                </Button>

                <Button formAction='/cadastro' variant="primary" type="submit" style={{margin:'20px'}}>
                    Cadastrar-se
                </Button>
            </Form>
        </div>
    );

};

export default LoginCard;