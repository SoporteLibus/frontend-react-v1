import { Box } from "@mui/material";
import Header from "../../../../components/admin/Header";
import LineChart from "../../../../components/admin/LineChart";

const Line = () => {
  return (
    <Box ml="90px" bgcolor={"var(--color-gris)"} pb={3} >
      <Header title="Grafico de lineas" subtitle="Grafico de lineas simple" />
      <Box height={"800px"} width={"100%"} >
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
