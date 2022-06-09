import React from 'react';
import './NavbarItem.css'

const NavbarItem = (props) => {
    return ( 
        <a href={props.link}>{props.name}</a>
     );
}
 
export default NavbarItem;