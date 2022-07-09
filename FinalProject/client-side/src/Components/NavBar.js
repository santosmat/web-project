import React from 'react';
import './NavBar.css';
import NavbarItem from './NavbarItem';

const NavBar = (props) => {
    return ( 
        <nav>
            <NavbarItem link='#home' name='Mais vendidos'></NavbarItem>
            <NavbarItem link='#home' name='Lançamentos'></NavbarItem>
            <NavbarItem link='#home' name='Todos'></NavbarItem>
        </nav>
     );
}
 
export default NavBar;