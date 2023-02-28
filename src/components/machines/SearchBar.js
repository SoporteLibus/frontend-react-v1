import { Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ posts, postsAll, setSearchResults, cargarDatos }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <header>
            <br/>
            <form className="search" onSubmit={e => {
                e.preventDefault();
                if (!e.target.search.value) return setSearchResults(postsAll);

                const resultsArray = posts.filter(
                    post => post.numero_de_operacion.includes(e.target.search.value)
                        ||
                        post.numero_de_inyectora.includes(e.target.search.value)
                        ||
                        post.codigo_de_producto.includes(e.target.search.value)
                        ||
                        post.numero_de_molde.includes(e.target.search.value)
                        ||
                        post.tiempo_de_ciclo.includes(e.target.search.value)
                        ||
                        post.materia_prima.includes(e.target.search.value));

                setSearchResults(resultsArray);
                cargarDatos(resultsArray);
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
export default SearchBar