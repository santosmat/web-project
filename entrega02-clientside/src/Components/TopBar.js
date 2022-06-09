import React from 'react';
import './TopBar.css'

const TopBar = (props) => {
    return ( 
        <div className='top-bar'>
            <a>
                Bookstore
            </a>
            <div className='nav-itens'>

                <a>
                    sign in
                </a>
                <a>
                    Sign up
                </a>
                <a>
                    Carrinho
                </a>

            </div>

        </div>
     );
}
 
export default TopBar;