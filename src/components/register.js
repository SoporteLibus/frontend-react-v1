import React, {useState} from 'react'
import axios from 'axios'
import '../styles/register.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register=()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [legajo, setLegajo] = useState('')
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate=useNavigate()

    const Register = async (e) => {
        e.preventDefault();
        try {
            const resp=await axios.post('http://172.18.7.6:3000/api/v1/auth/register', {
                name: name,
                email: email,
                legajo: legajo,
                password: password,
                password2: confPassword
            }).then((response) => {
        okMsg('Exito!', response.data.info, 'success')
      })
    }
    catch (error) {
      console.log(error)
      if (error.message == "Network Error") { errorMsg('Fallo!', "Error de conexion!", 'error') }
      if (error.response.status == 409) { errorMsg('Fallo!', error.response.data, 'error') }
      if (error.response.status == 500) { errorMsg('Fallo!', "El mail ya existe", 'error') }
    }
  };

  const okMsg = (title, text, icon) => {
    Swal.fire(
      title,
      text,
      icon
    ).then((result) => {
            if (result.isConfirmed) {
                  navigate("/app/v1/login/")
              }
          })
  }
  const errorMsg = (title, text, icon) => {
    Swal.fire(
      title,
      text,
      icon
    )
  }

return (
        
    <div className='register-box' >
        <form onSubmit={Register}>
            <p >{msg}</p>
            <div >
                <img src="/images/logo2.png" className="avatar" alt="Avatar" />
                <h1>Registrarse</h1>
                <label >Name</label>
                <div >
                    <input type="text"  placeholder="Name"
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
            <div >
                <label >Legajo</label>
                <div >
                    <input type="text" placeholder="Legajo" value={legajo} onChange={(e) => setLegajo(e.target.value)} />
                </div>
            </div>
            <div >
                <label >Email</label>
                <div >
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div >
                <label >Password</label>
                <div >
                    <input type="password"  placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div >
                <label >Confirm Password</label>
                <div >
                    <input type="password"  placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                </div>
            </div>
            <div >
            <input type="submit" value="Registrarse" />
            </div>
        </form>
    </div>
                
 
)
}

export default Register