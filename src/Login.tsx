import React from 'react';

interface LoginProps{
    onSumit: Function,
    onChange: Function,
    value: string,
    setError: Function,
    error: boolean
}

function Login(props:LoginProps) {
    const {onChange, onSumit, value, error, setError} = props

    return (
        <div>
            <p>Holap Mariana</p>
            <p> Tu sabras como ingresar</p>
            <label htmlFor="login-input-user" className="login__label">
                Algo Unico
            </label>
            <input id="login-input-user" onChange={({target})=>{
                onChange(target.value)
                setError(false)
            }}
                   className="login__input" type="text" value={value}/>
            {error===true && <p style={{color: "red", fontSize: 12}}>Sigue intentando, escribe algo mejor</p>}
            <button  className="login__submit" onClick={()=>onSumit()} >Entrar</button>
        </div>
    );
}

export default Login;
