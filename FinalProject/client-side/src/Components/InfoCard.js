import React from 'react';
import './InfoCard.css'
import capa from '../Assets/livroGenerico.jpg'
import { useNavigate } from 'react-router-dom';

const InfoCard = ({book, addItem}) => {

    const navigate = useNavigate();

    const handleAddClick = () => {
        addItem(book)
        window.alert("Item adicionado ao carrinho")
    }

    const handleBuyClick = () => {
        addItem(book)
        navigate('/cart')
    }


    return ( 
        <div className='info-card'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='book-img'>
                        <img src={capa} alt='capa-do-livro'></img>
                    </div>
                    <div className='payment'>
                        <h1 className='book-title'>{book.titulo}</h1>
                        <h3 className='book-subtitle'>Autor: {book.autores} | Editora: {book.editora}</h3>
                        <h2 className='book-value'>R${book.valor}</h2>
                        <button onClick={handleAddClick} className='add-chart-btn btn'>Adicionar ao carrinho</button>
                        <br />
                        <button onClick={handleBuyClick} className='buy-btn btn'>Comprar</button>

                    </div>
                </div>
            </div>


        </div>
     );
}
 
export default InfoCard;