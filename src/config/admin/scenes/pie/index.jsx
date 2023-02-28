import { Box } from "@mui/material";
import Header from "../../../../components/admin/Header";
import PieChart from "../../../../components/admin/PieChart";

const Pie = () => {
  return (
    <Box ml="90px" bgcolor={"var(--color-gris)"} pb={3} >
      <Header title="Grafico de torta" subtitle="Grafico de torta simple" />
      <Box height="800px" width={"100%"}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
