using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]s")]
    public class PersonaController : ControllerBase
    {
        private readonly PersonaDb _db;

        public PersonaController(PersonaDb db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<IActionResult> ListarPersonas()
        {
            var personas = await _db.Personas.ToListAsync();
            return Ok(personas);
        }

        [HttpPost]
        public async Task<IActionResult> RegistrarPersona([FromBody] ModeloPersona persona)
        {
            var nuevaPersona = new Persona {
                Nombre = persona.nombre,
                Apellidos = persona.apellidos,
                FechaDeNacimiento = persona.fechaDeNacimiento,
                NumeroDeHermanos = persona.numeroDeHermanos,
                Email = persona.email,
                Password = persona.password,
                SitioWeb = persona.sitioWeb,
                Telefono = persona.telefono
            };

            await _db.Personas.AddAsync(nuevaPersona);
            await _db.SaveChangesAsync();

            return Ok();
        }
    }
}