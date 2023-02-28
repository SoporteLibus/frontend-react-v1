import { useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, redirect } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ElectricGenerator from '@mui/icons-material/Bolt'
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import KeyIcon from '@mui/icons-material/Key';

const logout=()=>{
  localStorage.clear();
}

const Item = ({ title, to, icon, selected, setSelected, onclick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => {
        setSelected(title)
        onclick && onclick()
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>

  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  const auth = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('data'))

  return (
    <Box
      position={"fixed"}
      top={0}
      bottom={0}
      zIndex={998}
      p={0}
      sx={{
        "& .pro-sidebar-inner": {
          background: `var(--color-azul) !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "var(--color-gris) !important",
        },
        "& .pro-menu-item.active": {
          color: "var(--color-gris) !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h5" color={colors.grey[100]}>
                  Argul y Cia
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
            
          {auth ?
            <> 
                {!isCollapsed && (
                <Box mb="25px">
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <img
                      alt="profile-user"
                      width="100px"
                      height="100px"
                      src={'./images/logo2.png'}
                      style={{ cursor: "pointer", borderRadius: "40%" }}
                    />
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      variant="h5"
                      color={colors.grey[100]}
                      fontWeight="bold"
                      sx={{ m: "10px 0 0 0" }}
                    >
                      {user.data.name}
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                      {
                        (user.data.role === "ADMINS") ? "Administrador"
                          : (user.data.role === "Tecnicos") ? "Tecnico"
                            : "Otro"
                      }
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                {(user.data.role == "ADMINS") ?
                <>
                <Item
                  title="Inicio"
                  to="/"
                  icon={<HomeOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="caption"
                  color={colors.grey[100]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Info
                </Typography>
                <Item
                  title="Usuarios"
                  to="app/v1/config/team/"
                  icon={<PeopleOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Formularios"
                  to="app/v1/config/form/"
                  icon={<ReceiptOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Generadores"
                  to="app/v1/generadores"
                  icon={<ElectricGenerator />}
                  selected={selected}
                  setSelected={setSelected}
                />

                <Typography
                  variant="caption"
                  color={colors.grey[100]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Utilidad
                </Typography>
                <Item
                  title="Nuevo usuario"
                  to="app/v1/config/newform/"
                  icon={<PersonOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Calendario"
                  to="app/v1/config/calendar/"
                  icon={<CalendarTodayOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Cargar ordenes"
                  to="app/v1/loadfile/"
                  icon={<CloudSyncIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="caption"
                  color={colors.grey[100]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Graficos
                </Typography>
                <Item
                  title="Barras"
                  to="app/v1/config/bar/"
                  icon={<BarChartOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
           
                <Item
                  title="Lineas"
                  to="app/v1/config/line/"
                  icon={<TimelineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Torta"
                  to="app/v1/config/pie/"
                  icon={<PieChartOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="caption"
                  color={colors.grey[100]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Sesion
                </Typography>
                <Item
                  title="Salir"
                  onclick={logout}
                  to="app/v1/login/"
                  icon={<LogoutIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                </>
                  :
                <>
                <Item
                  title="Inicio"
                  to="/"
                  icon={<HomeOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="caption"
                  color={colors.grey[100]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Info
                </Typography>
                <Item
                  title="Formularios"
                  to="app/v1/config/form/"
                  icon={<ReceiptOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />

                <Typography
                  variant="caption"
                  color={colors.grey[100]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Utilidad
                </Typography>
                <Item
                  title="Calendario"
                  to="app/v1/config/calendar/"
                  icon={<CalendarTodayOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                
                <Typography
                  variant="caption"
                  color={colors.grey[100]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Sesion
                </Typography>
                <Item
                  title="Salir"
                  onclick={logout}
                  to="app/v1/login/"
                  icon={<LogoutIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                </>
                }
              </Box>
            </>
            :
            <>
              <Item
                title="Ingresar"
                to="app/v1/login/"
                icon={<LoginIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Registrarse"
                to="app/v1/register/"
                icon={<KeyIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </>
          
          }
        </Menu>
      </ProSidebar>
      </Box>
  );
};

export default Sidebar;
