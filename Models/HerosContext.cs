using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BayremHeros.Models
{
    public class HerosContext : DbContext

    {
        public DbSet<Hero> hero { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(@"Server=localhost;Port=5432;Database=postgres;User Id=postgres;Password=admin; Database=Heros; ");
        }
    }

    [Table("Hero")]
    public class Hero
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("Nom")]
        public string Nom { get; set; }

        [Column("Age")]
        public string Age { get; set; }


        [Column("Pouvoir")]
        public string Pouvoir { get; set; }

        [Column("Citation")]
        public string Citation { get; set; }

        [Column("Photo")]
        public string Photo { get; set; }

    }
}
