import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <p style={{ 
        color: colors.grey[100],
        fontWeight: "bold",
        m: "0 0 5px 0",
        fontSize: "6vw"
       }} >
        {title}
      </p>
      <p style={{ 
        color: colors.greenAccent[400],
        fontSize: "4vw"
       }} >
        {subtitle}
      </p>
    </Box>
  );
};

export default Header;
