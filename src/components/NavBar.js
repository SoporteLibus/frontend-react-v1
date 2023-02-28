import { Link } from "react-router-dom";
import { useRef, useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { RxAvatar } from 'react-icons/rx'

// Componente del boton del NavBar
export const MobileIcon = styled.button`
  display: none;
  border: none;
  width: 5rem;
  background-color: transparent;
  outline: none;
  @media screen and (max-width: 900px) {
    display: block;
    cursor: pointer;
  }
`;

export default function Nav(){
    // Usado para desplegar el panel derecho en la version mobile
    const burgerRef = useRef();
    const navRef = useRef();
    const navigate=useNavigate();
    
    const logout=()=>{
        localStorage.clear();
        navigate('/v1/app/login')
    }
    const setBurger = () => {
        burgerRef.current.classList.toggle("active");
        navRef.current.classList.toggle("nav-active");
    }
    // Efecto del boton del NavBar
    const navlinks = document.querySelectorAll('.navlinks li');
    navlinks.forEach((link,index) => {
        if (link.style.animation){
            link.style.animation='';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        }
    });
    // Comprobacion del estado del boton del NavBar
    const [showMobileMenu, setShowMobileMenu] = useState(false)
  
    const auth=localStorage.getItem('token')
    const data=localStorage.getItem('data') 

    
     
    return (
        <div>
        <nav className="navbar">
        {auth ?
        <div className="logo-nav">
            <Link to="/app/v1/"><img src="/images/logo2.png" alt="Logo Argul" /></Link>
            <h4>Argul y Cia</h4>
        </div>
        :
        <div className="logo-nav">
            <Link to="/app/v1/login/"><img src="/images/logo2.png" alt="Logo Argul" /></Link>
            <h4>Argul y Cia</h4>
        </div>
        }
        <ul className="navlinks" ref={navRef} >
           
            {/* FUNCION LOGIN */}
            {auth ? 
            <>
            <li><Link to="app/v1/generadores/">Generadores</Link></li>
            <li><Link to="app/v1/">Inyectoras</Link></li>
            
            <li><Link to="/app/v1/loadfile/">Cargar ordenes</Link></li> 
            <li>
                <Link to="app/v1/config/"> 
                    <RxAvatar size={24} />
                </Link>
            </li>
            <li><Link onClick={logout} to="/app/v1/login/">Salir</Link></li>
            </>
            :
            <>           
            <li><Link  to="/app/v1/login/">Ingresar</Link></li>
            <li><Link to="/app/v1/register/">Registrarse</Link></li>
            </>  
            }
           
        </ul>
        <MobileIcon ref={burgerRef} className="burger" onClick={() => {
            setShowMobileMenu(!showMobileMenu)
            setBurger()
        }}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </MobileIcon>
    </nav>
    </div>
    )
}