import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../../components/admin/Header";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [msg, setMsg] = useState('');
  const navigate = useNavigate()

  const handleFormSubmit = async (values) => {
    try {
      const resp=await axios.post('http://172.18.7.6:3000/api/v1/auth/register', {
          name: values.name,
          email: values.email,
          legajo: `${values.legajo}`,
          password: values.password,
          password2: values.confPassword
      }).then((response) => {
        okMsg('Exito!', response.data.info, 'success')
      })
    }
    catch (error) {
      console.log(error)
      if (error.message == "Network Error") { errorMsg('Fallo!', "Error de conexion!", 'error') }
      if (error.response.status == 409) { errorMsg('Fallo!', error.response.data, 'error') }
      if (error.response.status == 500) { errorMsg('Fallo!', "El mail ya existe", 'error') }
    }
  };

  const okMsg = (title, text, icon) => {
    Swal.fire(
      title,
      text,
      icon
    ).then((result) => {
            if (result.isConfirmed) {
                  navigate("/app/v1/config/team/")
              }
          })
  }
  const errorMsg = (title, text, icon) => {
    Swal.fire(
      title,
      text,
      icon
    )
  }

  return (
    <Box ml="90px" bgcolor={"var(--color-gris)"} pb={3} >
      <Header title="CREAR USUARIO" subtitle="Crear un nuevo perfil de usuario" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <p >{msg}</p>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nombre"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Legajo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.legajo}
                name="legajo"
                error={!!touched.legajo && !!errors.legajo}
                helperText={touched.legajo && errors.legajo}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Contraseña"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Confirmar contraseña"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confPassword}
                name="confPassword"
                error={!!touched.confPassword && !!errors.confPassword}
                helperText={touched.confPassword && errors.confPassword}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Guardar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  legajo: yup.string().required("required"),
  email: yup.string().email("Email invalido").required("required"),
  password: yup.string().required("required"),
  confPassword: yup.string().required("required"),
});
const initialValues = {
  name: "",
  legajo: "",
  email: "",
  password: "",
  confPassword: "",
};

export default Form;
