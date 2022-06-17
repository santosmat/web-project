import React, {useState} from 'react';
import './Sign.css'

const SignUp = ({users}) => {

    const [login, setLogin] = useState(""); // Recebe credenciais de login do input
    const [pass, setPass] = useState(""); // Recebe credenciais de senha do input

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        users.push({name: login, password: pass})

        console.log("Cadastro efetuado com sucesso!!")
        console.log(users)
    }

    return (
    <div className='sign-in container-fluid'>
        <h1>Registre - se</h1>
        <form onSubmit={handleSubmit} className='login-form'>
            <label>
                Usuário:
                <input type='text' name={login} onChange={(e) =>{setLogin(e.target.value)}} />
            </label>
            <label>
                Senha:
                <input type='password' name={pass} onChange={(e) => {setPass(e.target.value)}} />
            </label>
            <input className='sign-btn btn' value='Cadastre - se' type='submit'></input>
        </form>
    </div> 

    );
}
 
export default SignUp;