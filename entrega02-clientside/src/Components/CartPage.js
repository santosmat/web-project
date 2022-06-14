import React from 'react';
import './CartPage.css'

const CartPage = ({cart, setCart, deleteItem, clearCart}) => {

    const handleClickBuy = () => {
        window.alert("Finalizar compra")
        clearCart();
    }

    const handleClickClear = () =>{
        clearCart();
    }
    return ( 
        <div className='cart-container'>
            <h1>Carrinho</h1>
            <ul className='cart-list'>
                {cart.map(item =>
                    <li className='cart-item' key={item.id}>{item.titulo}</li>    
                )}
            </ul>

            <button onClick={handleClickBuy} className='buy-cart-btn btn'>Finalizar Compra</button>
                        <br />
                        <button onClick={handleClickClear} className='clear-cart-btn btn'>Limpar carrinho</button>
        </div>
     );
}
 
export default CartPage;