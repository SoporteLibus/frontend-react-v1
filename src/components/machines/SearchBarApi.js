import { Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { getItemsApi } from "../../api/axios";

const SearchBarApi = ({ setSearchResults }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
        <header>
            <br/>
            <form className="search" onSubmit={e => {
                e.preventDefault();
                if (!e.target.search.value) return setSearchResults("No matches");
                const getItems = getItemsApi(e.target.search.value).then(data => { return setSearchResults(data) })
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
export default SearchBarApi