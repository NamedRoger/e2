namespace Api.Models
{
    public record ModeloPersona(
        string nombre,
        string apellidos,
        string email,
        string password, 
        string sitioWeb,
        string telefono,
        DateTime fechaDeNacimiento,
        int numeroDeHermanos
    );
}