import '../styles/login.css'
import { FcGoogle } from 'react-icons/fc'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, redirect } from 'react-router-dom'
import { fontSize } from '@mui/system'


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [respMsg, setRespMsg] = useState('');
    const navigate = useNavigate()


    const Auth = async (e) => {
        e.preventDefault();
        const resp=await axios.post('http://172.18.7.6:3000/api/v1/auth/login', {
            email: email,
            password: password
        }).then(data => {
            return data
        }).catch(error => {
            if (error.message == "Network Error") { setRespMsg("Error de conexion") }
            if (error.response.data.error) { setRespMsg(error.response.data.error) }
            return error
        })
        
        if (resp.data) {
            const result =resp.data.tokenSession
            const data=resp.data
            localStorage.setItem('token',result)
            localStorage.setItem('data',JSON.stringify(data))
            navigate("/app/v1/")
            window.location.reload()
        }
    }
    return (
        <div className='div-global'>
            <img src="/images/logo2.png" className="avatar" alt="Avatar" />
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={Auth}>
                    <label>Usuario</label>
                    <input type="text" placeholder="Ingresar Usuario" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    
                    <label>Contraseña</label>
                    <input type="password" placeholder="Ingresar Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 60,
                        color: "red",
                        fontWeight: 'lighter',
                        fontSize: 12
                    }}>
                        {respMsg}
                    </div>
                    <input type="submit" value="Entrar" />
                </form>
            </div>
        </div>
    )
}