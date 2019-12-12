import React from 'react';
import '../css/App.css'

import {Link} from 'react-router-dom';


function Navbar() {


    return(
        <div className='navbar'>
            <div>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <b className='nav-link'>Home</b>
                </Link>
            </div>

            <h1 style={{color:'white'}}>Fox-Baja</h1>

            <div>
                <Link to='/login' style={{textDecoration: 'none'}}>
                    <p className='nav-link'>Entrar</p>
                </Link>
            </div>
        </div>

    );

};


export default Navbar;