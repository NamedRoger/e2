import { TableContainer, Table as TableMaterial, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

const Table = ({ personas }) => {
    return (
        <TableContainer  >
            <TableMaterial sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Teléfono</TableCell>
                        <TableCell>Correo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { personas.map((persona) => (
                        <TableRow key={persona.id}>
                            <TableCell>{persona.nombre}</TableCell>
                            <TableCell>{persona.telefono}</TableCell>
                            <TableCell>{persona.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableMaterial>
        </TableContainer>
    );
};

export default Table;