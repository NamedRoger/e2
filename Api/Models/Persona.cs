namespace Api.Models 
{
    public class Persona
    {
        public int PersonaId { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
        public DateTime FechaDeNacimiento { get; set; }
        public string SitioWeb { get; set; }
        public int NumeroDeHermanos { get; set; }
        public string Password { get; set; }

        public  Persona()
        {

        }
    }
}