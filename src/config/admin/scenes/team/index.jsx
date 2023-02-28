import { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchBarUsers from "../../../../components/admin/users/SearchBarUsers";
import PostUsers from '../../../../components/admin/users/PostUsers'
import { getPostsUsers } from '../../../../api/axios';


const Team = () => {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const results = searchResults && searchResults.map(post => <PostUsers key={post._id} post={post}/>);
  const [loading, setLoading] = useState(true) 
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      minWidth: 250
    },
    {
      field: "legajo",
      headerName: "legajo",
      type: "number",
      headerAlign: "left",
      align: "left",
      minWidth: 250
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 250
    },
    {
      field: "role",
      headerName: "Nivel de acceso",
      flex: 1,
      minWidth: 250,
      renderCell: ({ row: { role } }) => {
        const roleLower = role.toLowerCase()
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              roleLower === "admins"
                ? colors.greenAccent[500]
                : role === "tecnicos"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {roleLower === "admins" && <AdminPanelSettingsOutlinedIcon />}
            {roleLower === "tecnicos" && <PermIdentityIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {roleLower[0].toUpperCase() + roleLower.substring(1)}
            </Typography>
          </Box>
        );
      },
    },
  ];
  console.log("Users>>>",searchResults)
  useEffect(() => {
        getPostsUsers().then(json => {
            setPosts(json)
            setSearchResults(json)
            setLoading(false)
        })
    }, [])
  
  
  return (
    <div className="main-container-generators">
      <SearchBarUsers posts={posts} postsAll={searchResults} setSearchResults={setSearchResults} />
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

export default Team;
