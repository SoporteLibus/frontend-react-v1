import '../../styles/homeGenerator.css'

export default function HomeGenerator() {
    return (
        <div className="conteiner">
            <div className="card">
                <div className="box">
                <div className="content">
                    <h3>Generador</h3>
                    <p>Datos recopilados del Generador N°1</p>
                    <a href="/app/v1/generadores/generador1">Ver</a>
                </div>
                </div>
            </div>

            <div className="card">
                <div className="box">
                <div className="content">
                    <h3>Generador</h3>
                    <p>Datos recopilados del Generador N°2</p>
                    <a href="/app/v1/generadores/generador2">Ver</a>
                </div>
                </div>
            </div>

            <div className="card">
                <div className="box">
                <div className="content">
                    <h3>Extra</h3>
                    <p>Recopilación de datos extras</p>
                    <a href="/app/v1/generadores/datosextras">Ver</a>
                </div>
                </div>
            </div>
        </div>
    )
}