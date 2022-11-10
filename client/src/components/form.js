import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";

const Form = ({ onSubmit }) => {
    return (
        <Formik onSubmit={onSubmit}
        initialValues={{
            nombre: "",
            apellidos: "",
            telefono: "",
            email: "",
            password: "",
            sitioWeb: "",
            numeroDeHermanos: 0
        }}>
            {({ handleSubmit, values, handleChange }) => (

                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        textAlign="center">
                            <h2> Rregistro</h2>
                            <div>
                                <TextField id="nombre" name="nombre" label="Nombres" value={values.nombre} onChange={handleChange}/>
                                <TextField id="email" name="email"  onChange={handleChange} label="Correo electronico" value={values.email}/>
                            </div>
                            <div>
                                <TextField id="apellidos" name="apellidos"  onChange={handleChange} label="Apellidos" value={values.apellidos}/>
                                <TextField id="telefono" name="telefono"  onChange={handleChange} label="Teléfono" value={values.telefono}/>
                            </div>
                            <div>
                                <TextField id="password" name="password"  onChange={handleChange} label="Contraseña" value={values.password}/>
                                <TextField id="" name=""  label="Fecha de Nacimiento" />
                            </div>
                            <div>
                                <TextField id="sitioWeb" name="sitioWeb"  onChange={handleChange} label="Sitio Web" value={values.sitioWeb}/>
                                <TextField id="numeroDeHermanos" name="numeroDeHermanos"  o={(e) => console.log(e)} label="Número de Hermanos" value={values.numeroDeHermanos}/>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <Button size="large" variant="contained" type="submit">Registrar</Button>
                            </div>
                    </Box>
                </form>

            )}
        </Formik>
    );
};

export default Form;