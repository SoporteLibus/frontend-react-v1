import Post from "./Post"
import React,{ useState, useEffect, } from "react"
import getPosts from '../../api/axios';
import '../../styles/search.css'
import SearchBar from './SearchBar'
import Input from '../../lib/Input';
import FormSection from "../../lib/FormSection";
import { skeletonListPage } from "../../config/global/skeleton";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ListPage = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [nombre_formulario,setNombreForm]=useState('');
    const [numero_operacion,setNumeroOp]=useState('');
    const [numero_producto,setNumeroProd]=useState('');
    const [materia_prima0,setMatPrim0]=useState('');
    const [materia_prima1,setMatPrim1]=useState('');
    const [materia_prima2,setMatPrim2]=useState('');
    const [materia_prima3,setMatPrim3]=useState('');
    const [materia_prima4,setMatPrim4]=useState('');
    const [materia_prima5,setMatPrim5]=useState('');
    const [numero_inyectora,setNumIny]=useState('');
    const [numero_molde,setNumMolde]=useState('');
    const [tiempo_ciclo,setTiemCic]=useState('');
    const [aditivo,setAdit]=useState('');
    const [registrado_por,setRegistro]=useState('');
    const [pico_de_inyectora,setPico]=useState('');
    const [microgel_0,setMicroGel0]=useState('');
    const [microgel_1,setMicroGel1]=useState('');
    const [regoplas,setRegoplas]=useState('');
    const [otro,setOtro]=useState('');
    const [robot,setRobot]=useState('')
    const [temp_plato_fijo,setTempPlaFij]=useState('')
    const [temp_plato_movil,setTemPlaMov]=useState('')
    const [temp_masa_fundida,setTempMasaFun]=useState('')
    const [tablero_colada_caliente,setTableroCol]=useState('')
    const [temp_horno,setTempHorno]=useState('')
    const [tpo_ciclo_optimo,setTpoCicloOpt]=useState('')
    const [tpo_ciclo_actual,setTpoCicloAct]=useState('')
    const [tpo_enfriamiento,setTpoEnfria]=useState('')
    const [tpo_inyeccion,setTpoIny]=useState('')
    const [tpo_extrusor,setTpoExt]=useState('')
    const [cojin,setCojin]=useState('')
    const [pico_presion,setPicoPresion]=useState('')
    const [punto_transferencia,setPuntoTransfer]=useState('')
    const [fuerza_cierre,setFuerzaCierre]=useState('')
    const [tamano_dosific,setTamano]=useState('')
    const [contrapresion,setContrapre]=useState('')
    const [presion_empaque,setPresionEmp]=useState('')
    const [tpo_retencion,setTpoRetencion]=useState('')
    const [tipo_expulsion,setTipoExp]=useState('')
    const [cavidades,setCavidades]=useState('')
    const [observaciones,setObservaciones]=useState('')
    
    
    useEffect(() => {
        getPosts().then(json => {
            setPosts(json)
            setSearchResults(json)
            setLoading(false)
        })
    }, [])

    const results = searchResults && searchResults.map(post => <Post key={post._id} post={post}/>);
    
    const SendForm = async (e) => {
        const authToken = localStorage.getItem('token')
            e.preventDefault()
        const resp = await axios.post('http://172.18.7.6:3000/api/v1/form',{
                nombre_formulario:nombre_formulario,
                numero_operacion:numero_operacion,
                numero_producto:numero_producto,
                materia_prima0:materia_prima0,
                materia_prima1:materia_prima1,
                materia_prima2:materia_prima2,
                materia_prima3:materia_prima3,
                materia_prima4:materia_prima4,
                materia_prima5:materia_prima5,
                numero_inyectora:numero_inyectora,
                numero_molde:numero_molde,
                tiempo_ciclo:tiempo_ciclo,
                aditivo:aditivo,
                registrado_por:registrado_por,
                pico_de_inyectora:pico_de_inyectora,
                microgel_0:microgel_0,
                microgel_1:microgel_1,
                regoplas:regoplas,
                robot:robot,
                otro:otro,
                temp_plato_fijo:temp_plato_fijo,
                temp_plato_movil:temp_plato_movil,
                temp_masa_fundida:temp_masa_fundida,
                tablero_colada_caliente:tablero_colada_caliente,
                temp_horno:temp_horno,
                tpo_ciclo_optimo:tpo_ciclo_optimo,
                tpo_ciclo_actual:tpo_ciclo_actual,
                tpo_inyeccion:tpo_inyeccion,
                tpo_extrusor:tpo_extrusor,
                tpo_enfriamiento:tpo_enfriamiento,
                cojin:cojin,
                pico_presion:pico_presion,
                punto_transferencia:punto_transferencia,
                fuerza_cierre:fuerza_cierre,
                tamano_dosific:tamano_dosific,
                contrapresion:contrapresion,
                presion_empaque:presion_empaque,
                tpo_retencion:tpo_retencion,
                tipo_expulsion:tipo_expulsion,
                cavidades:cavidades,
                observaciones:observaciones
        },
        {
            headers:{
            'Authorization': `Bearer ${authToken}`
        }
            }).then((response) => {
                Swal.fire(
                    'Exito!',
                    response.data,
                    'success'
                ).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/app/v1/config/form/")
                    }
                })
            })
        .catch((error) => console.log("errormsg>>>",error.data))
        }
    const cargarElementos = (result) => {
    try{
        setNumeroOp(result[0].numero_de_operacion);
        setNumeroProd(result[0].codigo_de_producto);
        setNumIny(result[0].numero_de_inyectora);
        setNumMolde(result[0].numero_de_molde);
        setTiemCic(result[0].tiempo_de_ciclo);
        setMatPrim0(result[0].materia_prima);
    } catch (e) {}
        
    }
    
    if (loading) return skeletonListPage()
    return (
        <div className="main-container">
            <div className="div-fecha">
                <SearchBar posts={posts} postsAll={searchResults} setSearchResults={setSearchResults} cargarDatos={cargarElementos} />
            </div>

            <br/>
            <form onSubmit={SendForm} name="formulario">
            <FormSection title="Informacion de la orden de produccion">
                <Input title="Numero de operación" id="numero_de_operacion" value={numero_operacion} onChange={(e)=>setNumeroOp(e.target.value) } required />
                <Input title="Numero de producto" id="codigo_de_producto" value={numero_producto} onChange={(e)=>setNumeroProd(e.target.value)} required />
                <Input title="Numero de inyectora" id="numero_de_inyectora" value={numero_inyectora} onChange={(e)=>setNumIny(e.target.value)} required />
                <Input title="Numero de molde" id="numero_de_molde" value={numero_molde} onChange={(e)=>setNumMolde(e.target.value)} required />
                <Input title="Tiempo de ciclo" id="tiempo_de_ciclo" value={tiempo_ciclo}  onChange={(e)=>setTiemCic(e.target.value)} required />
                <Input title="Materia prima" id="materia_prima" value={materia_prima0}  onChange={(e)=>setMatPrim0(e.target.value)} />
                <Input title="Materia prima" value={materia_prima1}  onChange={(e)=>setMatPrim1(e.target.value)} />
                <Input title="Materia prima" value={materia_prima2}  onChange={(e)=>setMatPrim2(e.target.value)} />
                <Input title="Materia prima" value={materia_prima3}  onChange={(e)=>setMatPrim3(e.target.value)} />
                <Input title="Materia prima" value={materia_prima4}  onChange={(e)=>setMatPrim4(e.target.value)} />
                <Input title="Materia prima" value={materia_prima5}  onChange={(e)=>setMatPrim5(e.target.value)} />
                <Input title="Aditivo" id="aditivo" value={aditivo}  onChange={(e)=>setAdit(e.target.value)} required />
                <Input title="Registrado por" id="registrado_por" value={registrado_por}  onChange={(e)=>setRegistro(e.target.value)} required />
            </FormSection>
            <FormSection title="Dispositivos utilizados">
                <Input title="Pico de inyectora" id="pico_de_inyectora" value={pico_de_inyectora}  onChange={(e)=>setPico(e.target.value)} required />
                <Input title="Microgel 0" id="microgel_0" value={microgel_0}  onChange={(e)=>setMicroGel0(e.target.value)} required />
                <Input title="Microgel 1" id="microgel_1" value={microgel_1}  onChange={(e)=>setMicroGel1(e.target.value)} required />
                <Input title="Recoplas" id="regoplas"value={regoplas}   onChange={(e)=>setRegoplas(e.target.value)} required />
                <Input title="Robot" id="robot" value={robot}  onChange={(e)=>setRobot(e.target.value)} required />
                <Input title="Otro" id="otro"value={otro}   onChange={(e)=>setOtro(e.target.value)} required />
            </FormSection>
            <FormSection title="Temperaturas del proceso">
                <Input title="Temp. plato fijo" id="temp_plato_fijo"value={temp_plato_fijo}   onChange={(e)=>setTempPlaFij(e.target.value)} required />
                <Input title="Temp. plato movil" id="temp_plato_movil" value={temp_plato_movil}   onChange={(e)=>setTemPlaMov(e.target.value)} required />
                <Input title="Temp. masa fundida" id="temp_masa_fundida" value={temp_masa_fundida}   onChange={(e)=>setTempMasaFun(e.target.value)} required />
                <Input title="Tablero colada caliente" id="tablero_colada_caliente" value={tablero_colada_caliente}   onChange={(e)=>setTableroCol(e.target.value)} required />
                <Input title="Temp. de horno" id="temp_horno" value={temp_horno}   onChange={(e)=>setTempHorno(e.target.value)}  required />
            </FormSection>
            <FormSection title="Parametros del proceso">
                <Input title="Tpo. de ciclo optimo" id="tpo_ciclo_optimo" value={tpo_ciclo_optimo}   onChange={(e)=>setTpoCicloOpt(e.target.value)} required />
                <Input title="Tpo. ciclo actual" id="tpo_ciclo_actual" value={tpo_ciclo_actual}  onChange={(e)=>setTpoCicloAct(e.target.value)} required />
                <Input title="Tpo. de inyección" id="tpo_inyeccion"value={tpo_inyeccion}   onChange={(e)=>setTpoIny(e.target.value)} required />
                <Input title="Tpo. de extrusor" id="tpo_extrusor"value={tpo_extrusor}   onChange={(e)=>setTpoExt(e.target.value)} required />
                <Input title="Tpo. de enfriamiento" id="tpo_enfriamiento" value={tpo_enfriamiento}  onChange={(e)=>setTpoEnfria(e.target.value)} required />
                <Input title="Cojin" id="cojin" value={cojin}  onChange={(e)=>setCojin(e.target.value)} required />
                <Input title="Pico de preción" id="pico_presion"value={pico_presion}   onChange={(e)=>setPicoPresion(e.target.value)} required />
                <Input title="Punto de transf." id="punto_transferencia" value={punto_transferencia}  onChange={(e)=>setPuntoTransfer(e.target.value)} required />
                <Input title="Fuerza de cierre" id="fuerza_cierre"value={fuerza_cierre}   onChange={(e)=>setFuerzaCierre(e.target.value)} required />
                <Input title="Tamaño dosificado" id="tamano_dosific" value={tamano_dosific}  onChange={(e)=>setTamano(e.target.value)} required />
                <Input title="Contrapresión" id="contrapresion"value={contrapresion}   onChange={(e)=>setContrapre(e.target.value)} required />
                <Input title="Precion de empaque" id="presion_empaque" value={presion_empaque}  onChange={(e)=>setPresionEmp(e.target.value)} required />
                <Input title="Tpo. de retención" id="tpo_retencion"value={tpo_retencion}   onChange={(e)=>setTpoRetencion(e.target.value)} required />
                <Input title="Tipo de expulsion" id="tipo_expulsion" value={tipo_expulsion}  onChange={(e)=>setTipoExp(e.target.value)} required />
            </FormSection>
            <FormSection title="Cavidades habilitadas en produccion">
                <Input title="Cavidades" id="cavidades" value={cavidades}  onChange={(e)=>setCavidades(e.target.value)} required />
            </FormSection>
            <FormSection title="Observaciones">
                <Input title="Observaciones" id="observaciones"value={observaciones}   onChange={(e)=>setObservaciones(e.target.value)} required />
            </FormSection>
            <div className="div-enviar">
                <button type="submit"
                    className="button-submit"
                    >
                    Agregar
                </button>
            </div>
            </form>
            </div>
       
    )
}

export default ListPage