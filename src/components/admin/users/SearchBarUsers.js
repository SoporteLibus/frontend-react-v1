import { Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchBarUser = ({ posts, postsAll, setSearchResults }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <header>
            <br/>
            <form className="search" onSubmit={e => {
                e.preventDefault();
                if (!e.target.search.value) return setSearchResults(postsAll);

                const resultsArray = posts.filter(
                    post => post.name.includes(e.target.search.value)
                        ||
                        post.email.includes(e.target.search.value)
                        ||
                        post.role.includes(e.target.search.value)
                        ||
                        post.status.includes(e.target.search.value));

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
export default SearchBarUser