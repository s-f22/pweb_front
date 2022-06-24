using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using p2_PWEB_livraria.Domains;
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
    public class UsuariosController : ControllerBase
    {

        private IUsuarioRepository _usuarioRepository { get; set; }

        public UsuariosController()
        {
            _usuarioRepository = new UsuarioRepository();
        }


        [HttpPost]
        public IActionResult CadastrarNovoUsuario(Usuario novoUsuario)
        {
            _usuarioRepository.Cadastrar(novoUsuario);
            return StatusCode(201);
        }


        [HttpPost("RecuperarSenhaEnviar/{email}")]
        public IActionResult EnviaEmail(string email)
        {
            try
            {
                _usuarioRepository.EnviaEmailRecSenha(email);
                return Ok(new
                {
                    Mensagem = "Código enviado"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
                throw;
            }
        }

    }
}
