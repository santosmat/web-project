import React from 'react';
import './Payment.css'
import PaymentForm from './PaymentForm';
import {useForm} from 'react-hook-form'




const Payment = (props) => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = data => {
            console.log("Submissão efetuada com sucesso!!")
            console.log(data);
    }

    return ( 
        <div className='payment-container container-fluid'>
            <PaymentForm></PaymentForm>
        </div>
     );
}
 
export default Payment;