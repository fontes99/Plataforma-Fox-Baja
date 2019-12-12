import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import '../css/App.css'



function LoginCard(){
 
    return(
        <div className='logincard'>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control size='lg' type="email" id='em' placeholder="Entrar com Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control size='lg' type="password" id='pass' placeholder="Senha" />
                </Form.Group>

                <Button formAction='/' variant="primary" type="submit">
                    Entrar
                </Button>
            </Form>
        </div>
    );

};

export default LoginCard;