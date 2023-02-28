import React from "react";
import { Link } from "react-router-dom";





const Welcome = () => {
 

  return (
    <div className="container">
      <header>
        <h3>
          <strong>Cuenta activada con exito!!!</strong>
        </h3>
      </header>
      <Link to={"/app/v1/login"}>
        Ingresar
      </Link>
    </div>
  )
}
  
export default Welcome;