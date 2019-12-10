import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';


const Navbar = () =>{


    return(
        <div className='navbar'>
            <div className='home'>
                <Link to='/'>
                    <p>Home</p>
                </Link>
            </div>

            <div className='login'>
                <Link to='/login'>
                    <p>Entrar</p>
                </Link>
            </div>
        </div>

    );

}


export default Navbar;