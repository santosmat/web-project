import React, { useState } from 'react';
import './Sign.css'
const SignIn = ({users}) => {

    const [login, setLogin] = useState(""); // Recebe credenciais de login do input
    const [pass, setPass] = useState(""); // Recebe credenciais de senha do input
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        

        let user = users.filter((item) => item.name == login && item.password == pass ? true : false)
        
        

        if(user.length == 1)
        {
            setStatus({type: "Sucesso", message:"Login efetuado com sucesso!!"})
            localStorage.setItem('isLogged', true)
            localStorage.setItem('user', user[0])
            window.alert(`Olá ${user[0].name}, login efetuado com sucesso!!`)
        }
        else
        {
            setStatus({type: 'failed', message:'Login ou senha invalido!!'})
            window.alert(`Login ou senha invalidos!!`)
        }
        console.log(status)

        

    }


    return ( <div className='sign-in container-fluid'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className='login-form'>
                    <label>
                        Usuário:
                        <input type='text' name={login} onChange={(e) =>{setLogin(e.target.value)}} />
                    </label>
                    <label>
                        Senha:
                        <input type='password' name={pass} onChange={(e) => {setPass(e.target.value)}} />
                    </label>
                    <input className='sign-btn btn' value='Fazer login' type='submit'></input>

                </form>
    </div> );
}
 
export default SignIn;