import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css'

const TopBar = (props) => {
    return ( 
        <div className='top-bar'>
            <Link to='/'>
                Bookstore
            </Link>
            <div className='nav-itens'>

                <Link to='/'>
                    sign in
                </Link>
                
                <Link to='/'>
                    Sign up
                </Link>
                
                <Link to='/cart'>
                    Carrinho
                </Link>
                

            </div>

        </div>
     );
}
 
export default TopBar;