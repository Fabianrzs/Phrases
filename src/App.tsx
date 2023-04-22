import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./Login";
import Home from "./Home";

const credencials = ['TRY ME','THE WEEKEND','FABXAN','ABEL', 'MALUUU', 'MARIANA']

function App() {
    const [login, setLogin] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [any, setAny] = useState<string>('')
    const checkLogin = () =>{
        const valid = localStorage.getItem('lofiu');
        setLogin(!!valid)
    }
    const validLogin = () => {
        let find = false;
        credencials.map(x=>{
            if(x === any.toUpperCase()){
                find = true
                setLogin(true)
                localStorage.setItem('lofiu', 'funca');
                return
            }
        })
        if(!find){
            setError(true)
            setAny('')
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            localStorage.removeItem('lofiu');
            setLogin(false)
        },  30 * 60 * 1000); // 30 minutos en milisegundos

        return () => clearInterval(interval);
    }, []);

    useEffect(()=>{
        checkLogin()
    },[])

  return (
    <div className="App">
        <div className="wrap">
            {
                !login? <Login onSumit = {validLogin} onChange={setAny}
                               value = {any} error ={error}
                               setError ={setError}/>
                    : <Home setLogin={setLogin}/>
            }
        </div>
    </div>
  );
}

export default App;
