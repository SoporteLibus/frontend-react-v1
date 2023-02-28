import { Box } from "@mui/material";
import Header from "../../../../components/admin/Header";
import BarChart from "../../../../components/admin/BarChart";

const Bar = () => {
  return (
    <Box ml="90px" bgcolor={"var(--color-gris)"} pb={3} >
      <Header title="Grafico de barras" subtitle="Grafico de barras simple" />
      <Box height="800px" width={"100%"} >
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
