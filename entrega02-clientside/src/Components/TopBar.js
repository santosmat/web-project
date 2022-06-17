import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css'

const TopBar = ({login}) => {
    return ( 
        <div className='top-bar'>
            <Link to='/'>
                Bookstore
            </Link>
            <div className='nav-itens'>

                <Link className={`${login ? '.hidden' : ''}`} to='/sign-in'>
                    sign in
                </Link>
                
                <Link to='/sign-up'>
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