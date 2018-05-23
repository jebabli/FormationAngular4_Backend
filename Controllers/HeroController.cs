using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using BayremHeros.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BayremHeros.Controllers
{
    [Produces("application/json")]
    [Route("api/Hero")]
    public class HeroController : Controller
    {

        [HttpGet]
        public IEnumerable<Hero> GetAll()
        {
            using (var db = new HerosContext())
            {
                var heros = db.hero.OrderBy(p => p.Id);
                return heros.ToList();
            }
        }

        [HttpGet("{id}")]
        public Hero Get(int id)
        {
            using (var db = new HerosContext())
            {
                return db.hero.FirstOrDefault(x => x.Id == id);
            }

        }

        [HttpPost]
        public int Create([FromBody] Hero item)
        {
            Random id = new Random();
            var Id = id.Next(1, 1000) * Process.GetCurrentProcess().Id;

            if (item == null)
            {
                return -1;
            }
            using (var db = new HerosContext())
            {
                item.Id = Id;
                db.hero.Add(item);
                return db.SaveChanges();
            }
        }
    }
}
