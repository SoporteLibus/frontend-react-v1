const Post = ({ post }) => {
    return (
        <tr className="trclass">
            <td className="tdclass" data-label="Numero de operacion">{post.numero_de_operacion}</td>
            <td className="tdclass" data-label="Codigo de producto">{post.codigo_de_producto}</td>
            <td className="tdclass" data-label="Numero de Inyectora">{post.numero_de_inyectora}</td>
            <td className="tdclass" data-label="Numero de molde">{post.numero_de_molde}</td>
            <td className="tdclass" data-label="Tiempo de ciclo">{post.tiempo_de_ciclo}</td>
            <td className="tdclass" data-label="Materia prima">{post.materia_prima}</td>
        </tr>
    )
}
export default Post