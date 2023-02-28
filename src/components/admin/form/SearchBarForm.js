import { Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchBarForm = ({ posts, postsAll, setSearchResults }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <header>
            <br/>
            <form className="search" onSubmit={e => {
                e.preventDefault();
                if (!e.target.search.value) return setSearchResults(postsAll);
                // if (!e.target.search.value in posts) {setSearchResults(postsAll)}

                const resultsArray = posts.filter(
                    post => post.numero_operacion.includes(e.target.search.value)
                        ||
                        post.numero_producto.includes(e.target.search.value)
                        ||
                        post.materia_prima0.includes(e.target.search.value)
                        ||
                        post.materia_prima1.includes(e.target.search.value)
                        ||
                        post.materia_prima2.includes(e.target.search.value)
                        ||
                        post.materia_prima3.includes(e.target.search.value)
                        ||
                        post.materia_prima4.includes(e.target.search.value)
                        ||
                        post.materia_prima5.includes(e.target.search.value)
                        ||
                        post.numero_inyectora.includes(e.target.search.value)
                        ||
                        post.numero_molde.includes(e.target.search.value)
                        ||
                        post.tiempo_ciclo.includes(e.target.search.value)
                        ||
                        post.aditivo.includes(e.target.search.value)
                        ||
                        post.registrado_por.includes(e.target.search.value)
                        ||
                        post.pico_de_inyectora.includes(e.target.search.value)
                        ||
                        post.microgel_0.includes(e.target.search.value)
                        ||
                        post.microgel_1.includes(e.target.search.value)
                        ||
                        post.regoplas.includes(e.target.search.value)
                        ||
                        post.robot.includes(e.target.search.value)
                        ||
                        post.otro.includes(e.target.search.value)
                        ||
                        post.temp_plato_fijo.includes(e.target.search.value)
                        ||
                        post.temp_plato_movil.includes(e.target.search.value)
                        ||
                        post.temp_masa_fundida.includes(e.target.search.value)
                        ||
                        post.tablero_colada_caliente.includes(e.target.search.value)
                        ||
                        post.temp_horno.includes(e.target.search.value)
                        ||
                        post.tpo_ciclo_optimo.includes(e.target.search.value)
                        ||
                        post.tpo_ciclo_actual.includes(e.target.search.value)
                        ||
                        post.tpo_inyeccion.includes(e.target.search.value)
                        ||
                        post.tpo_extrusor.includes(e.target.search.value)
                        ||
                        post.tpo_enfriamiento.includes(e.target.search.value)
                        ||
                        post.cojin.includes(e.target.search.value)
                        ||
                        post.pico_presion.includes(e.target.search.value)
                        ||
                        post.punto_transferencia.includes(e.target.search.value)
                        ||
                        post.fuerza_cierre.includes(e.target.search.value)
                        ||
                        post.tamano_dosific.includes(e.target.search.value)
                        ||
                        post.contrapresion.includes(e.target.search.value)
                        ||
                        post.presion_empaque.includes(e.target.search.value)
                        ||
                        post.tpo_retencion.includes(e.target.search.value)
                        ||
                        post.tipo_expulsion.includes(e.target.search.value)
                        ||
                        post.cavidades.includes(e.target.search.value)
                        ||
                        post.observaciones.includes(e.target.search.value)
                );

                setSearchResults(resultsArray);
                
            }}>
                <Box
                    display="flex"
                    backgroundColor={colors.primary[400]}
                    borderRadius="3px"
                    minWidth={110}
                >
                    <InputBase name='search' sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                    <IconButton type="submit" sx={{ p: 1 }}>
                        <SearchIcon />
                    </IconButton>
                </Box>
            </form>
            <br/>
        </header>
    )
}
export default SearchBarForm