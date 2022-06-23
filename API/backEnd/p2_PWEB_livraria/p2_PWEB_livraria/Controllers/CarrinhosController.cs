using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using p2_PWEB_livraria.Interfaces;
using p2_PWEB_livraria.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace p2_PWEB_livraria.Controllers
{
    [Produces("application/json")]

    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CarrinhosController : ControllerBase
    {
        private ICarrinhoRepository _carrinhoRepository { get; set; }

        public CarrinhosController()
        {
            _carrinhoRepository = new CarrinhoRepository();
        }



        [HttpGet]
        public IActionResult ListarMeuCarrinho()
        {
            try
            {
                return Ok(_carrinhoRepository.ListarMeuCarrinho(Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value)));
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        //[HttpDelete( "{idUsuario}" )]
        [HttpDelete]
        public IActionResult LimparCarrinho()
        {
            _carrinhoRepository.LimparCarrinho(Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value));
            return StatusCode(204);
        }



        [HttpPut("{ idLivro }") ]
        public IActionResult AdicionarLivroAomEuCarrinho(int idLivro)
        {
            _carrinhoRepository.AdicionarLivroAoMeuCarrinho(idLivro, Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value));
            return StatusCode(204);
        }
    }
}
