import React, {useState} from 'react';
import '../css/App.css'
import {useSelector, useDispatch} from 'react-redux'

import {logout} from '../actions'
// import LoginCard from'../Components/LoginCard'

import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import {login} from '../actions'

function Navbar() {

    const disptach = useDispatch();

    const isLogged = useSelector(state => state.isLogged);

    const [showEntrar, setShowEntrar] = useState(false);
    const [showCadastro, setShowCadastro] = useState(false);

    const handleCloseEntrar = () => setShowEntrar(false);
    const handleShowEntrar= () => setShowEntrar(true)

    const handleCloseCadastro = () => setShowCadastro(false);
    const handleShowCadastro= () => setShowCadastro(true)
    
    function sair(e){
        e.stopPropagation();
        e.preventDefault();
        disptach(logout());
    }

    function entrar(e){
        e.stopPropagation();
        e.preventDefault();
        disptach(login());
        setShowEntrar(false);
    }

    const [validated, setValidated] = useState(false);

    const senha = 'Fox-baja2019'
    
    const handleSubmit = event => {

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

        alert('Cadastro realizado com sucesso!\nBem vindo(a) à plataforma!')
        setValidated(true);
    };

    return(
        <div className='navbar'>
            <div>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <b className='nav-link'>Home</b>
                </Link>
            </div>

            <h1 style={{color:'white'}}>Fox-Baja</h1>

            <div>
                { !isLogged ? 
                <Button onClick={handleShowEntrar} style={{background:'none', border:'none'}}>
                    <p className='nav-link'>Entrar</p>
                </Button>
                :
                <Button onClick={sair} style={{background:'none', border:'none'}}>
                    <p className='nav-link'>Sair</p>
                </Button>
                }

            </div>

            <Modal show={showEntrar} onHide={handleCloseEntrar}>
                <Modal.Header closeButton>
                    <Modal.Title>Entrar</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Endereço de Email</Form.Label>
                            <Form.Control size='lg' type="email" placeholder="Entrar com Email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control size='lg' type="password" placeholder="Senha" />
                        </Form.Group>
                    </Form>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={entrar}>
                        Entrar
                    </Button>
                    <Button variant="primary" onClick={handleShowCadastro}>
                        Cadastrar-se
                    </Button>
                </Modal.Footer>
            </Modal>




            <Modal show={showCadastro} onHide={handleCloseCadastro}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastro</Modal.Title>
                </Modal.Header>

                <Modal.Body>

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

                </Modal.Body>
            </Modal>

        </div>

    );

};


export default Navbar;