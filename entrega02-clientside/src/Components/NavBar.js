import React from 'react';
import './NavBar.css';
import NavbarItem from './NavbarItem';

const NavBar = (props) => {
    return ( 
        <nav>
            <NavbarItem link='#home' name='item1'></NavbarItem>
            <NavbarItem link='#home' name='item2'></NavbarItem>
            <NavbarItem link='#home' name='item3'></NavbarItem>
        </nav>
     );
}
 
export default NavBar;