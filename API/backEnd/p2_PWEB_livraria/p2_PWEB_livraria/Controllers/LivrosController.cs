using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using p2_PWEB_livraria.Interfaces;
using p2_PWEB_livraria.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace p2_PWEB_livraria.Controllers
{
    [Produces("application/json")]

    [Route("api/[controller]")]
    [ApiController]
    
    public class LivrosController : ControllerBase
    {
        private ILivroRepository _livroRepository { get; set; }

        public LivrosController()
        {
            _livroRepository = new LivroRepository();
        }

        [HttpGet]
        public IActionResult ListarTodosOsLivros()
        {
            try
            {
                return Ok(_livroRepository.ListarTodosOsLivros());
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }


        [HttpGet("{idLivro}")]
        public IActionResult BuscarLivroPorID(int idLivro)
        {
            return Ok(_livroRepository.ListarLivroPorId(idLivro));
        }

        [HttpGet("pesquisar/{tituloLivro}")]
        public IActionResult BuscarLivroPeloTitulo(string tituloLivro)
        {
            return Ok(_livroRepository.BuscarLivrosPorTitulo(tituloLivro));
        }

    }
}
