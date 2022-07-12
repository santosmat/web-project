import React from 'react';
import './Edit.css'

const EditProducts = (props) => {
    return ( <div className='edit-products manage container-fluid'>
        <h1>Livros</h1>
        <ul className='edit-list'>

            {props.bookList.map((book) => <li key={book.id}>
                {`Nome: ${book.titulo}`}
                <div className='buttons'>
                    <button className='edit-button no-btn-style'>Editar</button>
                    <button className='exclude-button no-btn-style'>Excluir</button>
                </div>
            </li>)}
        </ul>
    </div> );
}
 
export default EditProducts;