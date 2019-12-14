import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import History from '../History'

import '../css/App.css'

function RegisterCard() {

    const [validated, setValidated] = useState(false);

    const senha = 'Fox-baja2019'
    
    const handleSubmit = event => {

        console.log(document.getElementById("senha").value)

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if(document.getElementById("senha").value !== senha){
            alert('Nao foi possivel realizar seu cadastro.\nSenha de acesso incorreta')
            event.preventDefault();
            event.stopPropagation();
        }
    
        setValidated(true);
        History.push('/')
    };


    return(
        <div className='card-template'>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>

                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="exemplo@exemplo.com"
                        />
                        <Form.Control.Feedback type='invalid'>Escolha um Email valido</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Escolha uma senha"
                        />
                        <Form.Control.Feedback type='invalid'>Escolha uma senha valida</Form.Control.Feedback>
                    </Form.Group>

                </Form.Row>

                <Form.Group md="6" controlId="validationCustom03">
                    <Form.Label>Data de entrada</Form.Label>
                    <Form.Control type="text" placeholder="mm/aaaa" required />
                </Form.Group>
            

                <Form.Group>
                    <Form.Check
                    label="Membro atual"
                    />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} md='4' controlId="formGridSubsis">
                        <Form.Label>Subsistema atual</Form.Label>
                        <Form.Control as="select">
                            <option>Suspensão</option>
                            <option>Freio</option>
                            <option>Chassi</option>
                            <option>Motor</option>
                            <option>Eletrica</option>
                            <option>Gestão</option>
                            <option>Financeiro</option>
                            <option>Marketing</option>
                            <option>Logistica</option>
                            <option>RH</option>
                            <option>Tech</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md='4' controlId="formGridCargo">
                        <Form.Label>Cargo</Form.Label>
                        <Form.Control as="select">
                            <option>Membro</option>
                            <option>Gerente</option>
                            <option>Diretor</option>
                            <option>Capitão</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="senha">
                        <Form.Label>Senha de acesso</Form.Label>
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>

                </Form.Row>
                
                <Button type="submit">Cadastrar-se</Button>

            </Form>

        </div>
    );
}

export default RegisterCard;