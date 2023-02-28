const PostForm = ({ post }) => {
    return (
        <tr className="trclass">
            <td className="tdclass" data-label="#">{post.numero_operacion}</td>
            <td className="tdclass" data-label="#">{post.numero_producto}</td>
            <td className="tdclass" data-label="#">{post.materia_prima0}</td>
            <td className="tdclass" data-label="#">{post.materia_prima1}</td>
            <td className="tdclass" data-label="#">{post.materia_prima2}</td>
            <td className="tdclass" data-label="#">{post.materia_prima3}</td>
            <td className="tdclass" data-label="#">{post.materia_prima4}</td>
            <td className="tdclass" data-label="#">{post.materia_prima5}</td>
            <td className="tdclass" data-label="#">{post.numero_inyectora}</td>
            <td className="tdclass" data-label="#">{post.numero_molde}</td>
            <td className="tdclass" data-label="#">{post.tiempo_ciclo}</td>
            <td className="tdclass" data-label="#">{post.aditivo}</td>
            <td className="tdclass" data-label="#">{post.registrado_por}</td>
            <td className="tdclass" data-label="#">{post.pico_de_inyectora}</td>
            <td className="tdclass" data-label="#">{post.microgel_0}</td>
            <td className="tdclass" data-label="#">{post.microgel_1}</td>
            <td className="tdclass" data-label="#">{post.regoplas}</td>
            <td className="tdclass" data-label="#">{post.robot}</td>
            <td className="tdclass" data-label="#">{post.otro}</td>
            <td className="tdclass" data-label="#">{post.temp_plato_fijo}</td>
            <td className="tdclass" data-label="#">{post.temp_plato_movil}</td>
            <td className="tdclass" data-label="#">{post.temp_masa_fundida}</td>
            <td className="tdclass" data-label="#">{post.tablero_colada_caliente}</td>
            <td className="tdclass" data-label="#">{post.temp_horno}</td>
            <td className="tdclass" data-label="#">{post.tpo_ciclo_optimo}</td>
            <td className="tdclass" data-label="#">{post.tpo_ciclo_actual}</td>
            <td className="tdclass" data-label="#">{post.tpo_inyeccion}</td>
            <td className="tdclass" data-label="#">{post.tpo_extrusor}</td>
            <td className="tdclass" data-label="#">{post.tpo_enfriamiento}</td>
            <td className="tdclass" data-label="#">{post.cojin}</td>
            <td className="tdclass" data-label="#">{post.pico_presion}</td>
            <td className="tdclass" data-label="#">{post.punto_transferencia}</td>
            <td className="tdclass" data-label="#">{post.fuerza_cierre}</td>
            <td className="tdclass" data-label="#">{post.tamano_dosific}</td>
            <td className="tdclass" data-label="#">{post.contrapresion}</td>
            <td className="tdclass" data-label="#">{post.presion_empaque}</td>
            <td className="tdclass" data-label="#">{post.tpo_retencion}</td>
            <td className="tdclass" data-label="#">{post.tipo_expulsion}</td>
            <td className="tdclass" data-label="#">{post.cavidades}</td>
            <td className="tdclass" data-label="#">{post.observaciones}</td>
        </tr>
    )
}
export default PostForm