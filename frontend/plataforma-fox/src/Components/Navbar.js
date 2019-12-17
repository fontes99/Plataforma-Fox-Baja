import React, {useState} from 'react';
import '../css/App.css'
import {useSelector, useDispatch} from 'react-redux'

import {logout} from '../actions'

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
    const handleShowEntrar = () => setShowEntrar(true)

    const handleCloseCadastro = () => setShowCadastro(false);
    const handleShowCadastro = () => setShowCadastro(true)
    
    function sair(e){
        e.stopPropagation();
        e.preventDefault();
        disptach(logout());
    }

    function entrar(e){
        e.stopPropagation();
        e.preventDefault();

        console.log('bater api de entrada')
        
        disptach(login());
        setShowEntrar(false);
    }

    const [validated, setValidated] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const updateCode = e => {
        if(e.target.value !== 'Fox-baja2019'){
            setDisabled(true);
        };

        if(e.target.value === 'Fox-baja2019'){
            setDisabled(false);
        }
    };

    
    const handleSubmit = event => {

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if(document.getElementById("senha").value === ''){
            event.preventDefault();
            event.stopPropagation();
            alert('Nao foi possivel realizar seu cadastro.\nDigite o código de acesso')
        }
        
        else{
            setValidated(true)

            if (form.checkValidity() === true){
                console.log('bater na api cadastro')

            }
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


            <Modal show={showCadastro} onHide={handleCloseCadastro} enforceFocus={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Cadastro</Modal.Title>
                </Modal.Header>

                <Modal.Header>
                    <Form.Group md="6" controlId="senha">
                        <Form.Label>Código de acesso</Form.Label>
                        <Form.Control type="password" placeholder="Senha" onChange={updateCode}/>
                    </Form.Group>
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
                                disabled={disabled}
                            />
                            <Form.Control.Feedback type='invalid'>Escolha um Email valido</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom02">
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

                    <Form.Group md="6" controlId="validationCustom03">
                        <Form.Label>Data de entrada</Form.Label>
                        <Form.Control type="text" placeholder="mm/aaaa" required disabled={disabled}/>
                    </Form.Group>
                

                    <Form.Group>
                        <Form.Check
                        label="Membro atual"
                        disabled={disabled}
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} md='6' controlId="formGridSubsis">
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

                            <Form.Group as={Col} md='6' controlId="formGridCargo">
                            <Form.Label>Cargo</Form.Label>
                            <Form.Control as="select" disabled={disabled}>
                                <option>Membro</option>
                                <option>Gerente</option>
                                <option>Diretor</option>
                                <option>Capitão</option>
                            </Form.Control>
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