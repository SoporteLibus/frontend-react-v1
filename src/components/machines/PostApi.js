import '../../styles/home.css'
import {Link} from "react-router-dom";

const PostApi = ({ post, image, link }) => {
    return (
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <p>{post.numero_inyectora}</p>
                    <img src={image} alt="Maquina" />
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>N° de Op: {post.numero_operacion}</p>
                    <p>Codigo de producto: {post.numero_producto}</p>
                    <p>Materia prima: {post.materia_prima0}</p>
                    <p>N° de molde: {post.numero_molde}</p>
                    <p>Fecha: {post.hora}</p>
                    <Link to={link}>Ver</Link>
                </div>
            </div>
        </div>
    )
}
export default PostApi