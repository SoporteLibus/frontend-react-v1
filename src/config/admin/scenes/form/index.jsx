import { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../../theme";
import Header from "../../../../components/admin/Header";
import SearchBarForm from "../../../../components/admin/form/SearchBarForm";
import PostForm from '../../../../components/admin/form/PostForm'
import { getPostsForm } from '../../../../api/axios';

const Invoices = () => {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const results = searchResults && searchResults.map(post => <PostForm key={post._id} post={post}/>);
  const [loading, setLoading] = useState(true)
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "numero_operacion",
      headerName: "N° de operacion",
      flex: 1,
      cellClassName: "name-column--cell",
      minWidth: 250
    },
    {
      field: "numero_producto",
      headerName: "N° de producto",
      flex: 1,
      minWidth: 250
    },
    {
      field: "materia_prima0",
      headerName: "Materia Prima",
      flex: 1,
      minWidth: 250
    },
    {
      field: "materia_prima1",
      headerName: "Materia Prima",
      flex: 1,
      minWidth: 250
    },
    {
      field: "materia_prima2",
      headerName: "Materia Prima",
      flex: 1,
      minWidth: 250
    },
    {
      field: "materia_prima3",
      headerName: "Materia Prima",
      flex: 1,
      minWidth: 250
    },
    {
      field: "materia_prima4",
      headerName: "Materia Prima",
      flex: 1,
      minWidth: 250
    },
    {
      field: "materia_prima5",
      headerName: "Materia Prima",
      flex: 1,
      minWidth: 250
    },
    {
      field: "numero_inyectora",
      headerName: "N° de inyectora",
      flex: 1,
      minWidth: 250,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.numero_inyectora}
        </Typography>
      ),
    },
    {
      field: "numero_molde",
      headerName: "N° de molde",
      flex: 1,
      minWidth: 250
    },
    {
      field: "tiempo_ciclo",
      headerName: "Tiempo de ciclo",
      flex: 1,
      minWidth: 250
    },
    {
      field: "aditivo",
      headerName: "Aditivo",
      flex: 1,
      minWidth: 250
    },
    {
      field: "registrado_por",
      headerName: "Registrado por",
      flex: 1,
      minWidth: 250
    },
    {
      field: "pico_de_inyectora",
      headerName: "Pico de inyectora",
      flex: 1,
      minWidth: 250
    },
    {
      field: "microgel_0",
      headerName: "Microgel N°2",
      flex: 1,
      minWidth: 250
    },
    {
      field: "microgel_1",
      headerName: "Microgel n°1",
      flex: 1,
      minWidth: 250
    },
    {
      field: "regoplas",
      headerName: "Regoplas",
      flex: 1,
      minWidth: 250
    },
    {
      field: "robot",
      headerName: "Robot",
      flex: 1,
      minWidth: 250
    },
    {
      field: "otro",
      headerName: "Otro",
      flex: 1,
      minWidth: 250
    },
    {
      field: "temp_plato_fijo",
      headerName: "Temperatura plato fijo",
      flex: 1,
      minWidth: 250
    },
    {
      field: "temp_plato_movil",
      headerName: "Temperatura plato movil",
      flex: 1,
      minWidth: 250
    },
    {
      field: "temp_masa_fundida",
      headerName: "Temperatura masa fundida",
      flex: 1,
      minWidth: 250
    },
    {
      field: "tablero_colada_caliente",
      headerName: "Tablero colada caliente",
      flex: 1,
      minWidth: 250
    },
    {
      field: "temp_horno",
      headerName: "Temperatura de horno",
      flex: 1,
      minWidth: 250
    },
    {
      field: "tpo_ciclo_optimo",
      headerName: "Tiempo de ciclo optimo",
      flex: 1,
      minWidth: 250
    },
    {
      field: "tpo_ciclo_actual",
      headerName: "Tiempo de ciclo actual",
      flex: 1,
      minWidth: 250
    },
    {
      field: "tpo_inyeccion",
      headerName: "Tiempo de extrusor",
      flex: 1,
      minWidth: 250
    },
    {
      field: "tpo_extrusor",
      headerName: "Tiempo de extrusor",
      flex: 1,
      minWidth: 250
    },
    {
      field: "tpo_enfriamiento",
      headerName: "Tiempo de enfriamiento",
      flex: 1,
      minWidth: 250
    },
    {
      field: "cojin",
      headerName: "Cojin",
      flex: 1,
      minWidth: 250
    },
    {
      field: "pico_presion",
      headerName: "Pico de precion",
      flex: 1,
      minWidth: 250
    },
    {
      field: "punto_transferencia",
      headerName: "punto de transferencia",
      flex: 1,
      minWidth: 250
    },
    {
      field: "fuerza_cierre",
      headerName: "Fuerza de cierre",
      flex: 1,
      minWidth: 250
    },
    {
      field: "tamano_dosific",
      headerName: "Tamaño dosificado",
      flex: 1,
      minWidth: 250
    },
    {
      field: "contrapresion",
      headerName: "Contraprecion",
      flex: 1,
      minWidth: 250
    },
    {
      field: "presion_empaque",
      headerName: "Precion de empaque",
      flex: 1,
      minWidth: 250
    },
    {
      field: "tpo_retencion",
      headerName: "Tiempo de retencion",
      flex: 1,
      minWidth: 250
    },
    {
      field: "tipo_expulsion",
      headerName: "Tipo de expulsion",
      flex: 1,
      minWidth: 250
    },
    {
      field: "cavidades",
      headerName: "Cavidades",
      flex: 1,
      minWidth: 250
    },
    {
      field: "observaciones",
      headerName: "Observaciones",
      flex: 1,
      minWidth: 250
    },
  ];
  
  useEffect(() => {
        getPostsForm().then(json => {
            setPosts(json)
            setSearchResults(json)
            setLoading(false)
        })
  }, [])
  console.log("searchResult>>>",searchResults)
  return (
    <div className="main-container-generators">
      <SearchBarForm posts={searchResults} postsAll={posts} setSearchResults={setSearchResults} />
      <Box
        m="40px 0 0 0"
        height="900px"
        width={"100%"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "var(--color-azul)",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "var(--color-azul)",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid getRowId={(row) => row?._id} rows={searchResults} columns={columns} />
      </Box>
    </div>
  );
};

export default Invoices;