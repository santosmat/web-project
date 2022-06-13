import React from 'react';
import './InfoCard.css'
import capa from '../Assets/livroGenerico.jpg'

const InfoCard = (props) => {
    return ( 
        <div className='info-card'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='book-img'>
                        <img src={capa} alt='capa-do-livro'></img>
                    </div>
                    <div className='payment'>
                        <h1 className='book-title'>Nome do livro</h1>
                        <h3 className='book-subtitle'>Autor: aaaaaaa | Editora: aaaaaa</h3>
                        <h2 className='book-value'>Valor = R$ xx.xx</h2>
                        <button className='add-chart-btn btn'>Adicionar ao carrinho</button>
                        <br />
                        <button className='buy-btn btn'>Comprar</button>

                    </div>
                </div>
            </div>


        </div>
     );
}
 
export default InfoCard;