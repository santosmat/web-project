import React from 'react';
import './Card.css'
import capa from '../Assets/livroGenerico.jpg'

const Card = ({book}) => {
    return ( 
        <div className='card'>
            <img src={capa} alt="Capa de livro" className="center" />
            <h3><a href='./'>{book.titulo}</a></h3>
            <small>{book.autores}</small>
            <br/>
            <div className='price-value'>
                <strong>{book.valor}</strong>
            </div>
            <button className='saiba-mais-btn'>SAIBA MAIS</button>

            
        </div>
     );
}
 
export default Card;