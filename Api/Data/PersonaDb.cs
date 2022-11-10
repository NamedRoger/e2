using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class PersonaDb : DbContext
    {
        public DbSet<Persona> Personas => Set<Persona>();
        public PersonaDb(DbContextOptions<PersonaDb> options)
            : base(options)
        {

        }
    }
}