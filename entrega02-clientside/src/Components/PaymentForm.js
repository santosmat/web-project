import React, { useState } from 'react';
import { validate } from 'uuid';
import * as yup from 'yup';


const PaymentForm = (props) => {

    
    // Refazer os formularios usando o useForm();
    // Fazer função que verifica os dados corretamente, limpa carrinho e finaliza compra no submit
    // Adicionar campo para cpf e data de nascimento

   

    const [status, setStatus] = useState({ // Validação do formulario e exibição de
        type: '',
        message: ''
    })
    
    // Dados para a realização da compra
    const [name, setName] = useState("");
    const [card, setCard] = useState(""); // Numero cartao de credito
    const [userId, setUserId] = useState("") // CPF
    const [bornDate, setBornDate] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("");
    
    const handleSubmit = async (e) =>{
        e.preventDefault();



        const paymentData = {name,userId,bornDate,email, card, address}
        console.log(paymentData)

    }

    return ( 
        <div className='form'>
            <h1>Insira seus dados</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type='text' value={name} onChange={(e) =>{setName(e.target.value)}} />   
                </label>
                <label>
                    CPF:
                    <input type='text' value={userId} onChange={(e) =>{setUserId(e.target.value)}} />   
                </label>
                <label>
                    Data de nascimento:
                    <input type='date' value={bornDate} onChange={(e) =>{setBornDate(e.target.value)}} />   
                </label>
                <label>
                    Email:
                    <input type='email' value={email} onChange={(e) =>{setEmail(e.target.value)}} />   
                </label>
                <label>
                    Cartao de credito:
                    <input type='text' value={card} onChange={(e) =>{setCard(e.target.value)}} />
                </label>
                <label>
                    Endereço:
                    <input type='text' value={address} onChange={(e) =>{setAddress(e.target.value)}} />
                </label>
                <input className='payment-submit btn' value='Finalizar a compra' type='submit' />
            </form>
        </div>
     );
}
 
export default PaymentForm;