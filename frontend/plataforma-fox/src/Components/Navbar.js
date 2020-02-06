import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

import '../css/App.css';

import {logout} from '../actions';

import {Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import {login} from '../actions';

function Navbar() {

    const disptach = useDispatch();

    const isLogged = useSelector(state => state.isLogged);

    const [showEntrar, setShowEntrar] = useState(false);
    const [showCadastro, setShowCadastro] = useState(false);

    const handleCloseEntrar = () => setShowEntrar(false);
    const handleShowEntrar = () => setShowEntrar(true)

    const handleCloseCadastro = () => {
        setShowCadastro(false);
        setShowEntrar(true)
    }
    const handleShowCadastro = () => {
        handleCloseEntrar()
        setShowCadastro(true)
    }
    
    function sair(e){
        e.stopPropagation();
        e.preventDefault();
        disptach(logout());
    }

    const entrar = async e =>{
        e.stopPropagation();
        e.preventDefault();

        const em = document.getElementById("Email").value
        const pas = document.getElementById("Password").value

        const req = await axios.post(`http://localhost:8000/login`, {"email": em, "password": pas})
        const result = req.data

        console.log(result)
        alert(result.message)
        
        if (result.success === true){
            disptach(login());
            setShowEntrar(false);
        }
    }

    const [disabled, setDisabled] = useState(true);

    const updateCode = async e =>{
        console.log(e.target.value)

        const resp = await axios.post(`http://localhost:8000/validateSecret`, {"secret": e.target.value})
        const result = resp.data.success

        setDisabled(!result)
    
    };

    
    // const cadastrar = async (usr, em, pass, sec) =>{
        
    //     const resp = await axios.post(`http://localhost:8000/register`, {
    //         "username": usr, 
    //         "email": em,
    //         "password": pass,
    //         "secret": sec
    //     }).then(({data}) => {return data})

    //     console.log(resp)
    // }

    const handleCadastro = async event => {
        event.preventDefault();
        event.stopPropagation();

        const usr = document.getElementById('emailCadastro').value;
        const em = document.getElementById('emailCadastro').value;
        const pass = document.getElementById('senhaCadastro').value;
        const sec = document.getElementById('codCadastro').value;

        const resp = await axios.post(`http://localhost:8000/register`, {
            "username": usr, 
            "email": em,
            "password": pass,
            "secret": sec
        }).then(({data}) => {return data})

        console.log(resp)
        alert(resp.message)

        if (resp.success){
            disptach(login());
            setShowEntrar(false);
            setShowCadastro(false);
        }
            
    };

    return(
        <div>
            <div className='nav-title'>
                <h1 style={{color:'white', margin:'0px', padding:'20px'}}>Fox-Baja</h1>
            </div>

            <div className='navbar-itens'>
                
                <div>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <Button style={{background:'none', border:'none'}}>
                            <b className='nav-link'>Home</b>
                        </Button>
                    </Link>
                </div>

                <div>
                    <Link to='/membros' style={{textDecoration: 'none'}}>
                        <Button style={{background:'none', border:'none'}}>
                            <p className='nav-link'>Membros</p>
                        </Button>
                    </Link>
                </div>

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
            </div>

            {/* =============================================================== FORM ENTRAR ================================================================ */}

            <Modal show={showEntrar} onHide={handleCloseEntrar}>
                <Modal.Header closeButton>
                    <Modal.Title>Entrar</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form>
                        <Form.Group controlId="Email">
                            <Form.Label>Endereço de Email</Form.Label>
                            <Form.Control size='lg' type="email" placeholder="Entrar com Email" />
                        </Form.Group>

                        <Form.Group controlId="Password">
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


            {/* =============================================================== FORM REGISTRO ============================================================ */}


            <Modal show={showCadastro} onHide={handleCloseCadastro}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastro</Modal.Title>
                </Modal.Header>

                <Modal.Header>
                    <Form.Group md="6" controlId="codCadastro">
                        <Form.Label>Código de acesso</Form.Label>
                        <Form.Control type="password" placeholder="Senha" onChange={updateCode}/>
                    </Form.Group>
                </Modal.Header>

                <Modal.Body>

                <Form>

                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="emailCadastro">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="exemplo@exemplo.com"
                                disabled={disabled}
                            />
                            <Form.Control.Feedback type='invalid'>Escolha um Email valido</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="senhaCadastro">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Escolha uma senha"
                                disabled={disabled}
                            />
                            <Form.Control.Feedback type='invalid'>Escolha uma senha valida</Form.Control.Feedback>
                        </Form.Group>

                    </Form.Row>

                    <Form.Group md="6" controlId="dataCadastro">
                        <Form.Label>Data de entrada</Form.Label>
                        <Form.Control type="text" placeholder="mm/aaaa" required disabled={disabled}/>
                    </Form.Group>
                

                    <Form.Group controlId='membroAtualCadastro'>
                        <Form.Check
                        label="Membro atual"
                        disabled={disabled}
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} md='6' controlId="subSisCadastro">
                            <Form.Label>Subsistema atual</Form.Label>
                            <Form.Control as="select" disabled={disabled}>
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

                            <Form.Group as={Col} md='6' controlId="cargoCadastro">
                            <Form.Label>Cargo</Form.Label>
                            <Form.Control as="select" disabled={disabled}>
                                <option>Membro</option>
                                <option>Gerente</option>
                                <option>Diretor</option>
                                <option>Capitão</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    
                    <Button variant='primary' disabled={disabled} onClick={handleCadastro}>Cadastrar-se</Button>

                </Form>

                </Modal.Body>
            </Modal>

        </div>

    );

};


export default Navbar;