import React from 'react';
import '../css/App.css'
import {useSelector, useDispatch} from 'react-redux'

import {logout} from '../actions'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Navbar() {

    const disptach = useDispatch();

    const isLogged = useSelector(state => state.isLogged);

    function sair(e){
        e.stopPropagation();
        e.preventDefault();
        disptach(logout());
    }

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
                <Link to='/login' style={{textDecoration: 'none'}}>
                    <p className='nav-link'>Entrar</p>
                </Link>
                :
                <Button onClick={sair} style={{background:'none', border:'none'}}>
                    <p className='nav-link'>Sair</p>
                </Button>
                }

            </div>
        </div>

    );

};


export default Navbar;