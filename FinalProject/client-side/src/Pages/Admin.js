import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'

const Admin = (props) => {
    return ( 
        <div className='admin-page container-fluid'>
            <h1>Olá admin!!</h1>
            <ul>
                <li>
                    <Link to='/admin/edit/admins'>
                        <button className='btn'>Editar admnistradores</button>
                    </Link>
                </li>
                <li>
                    <Link to='/admin/edit/clients'>
                        <button className='btn'>Editar clientes</button>
                    </Link>
                </li>
                <li>
                    <Link to='/admin/edit/products'>
                        <button className='btn'>Editar produtos</button>
                    </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Admin;