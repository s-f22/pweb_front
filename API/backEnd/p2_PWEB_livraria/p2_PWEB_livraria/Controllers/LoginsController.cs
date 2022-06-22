using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using p2_PWEB_livraria.Domains;
using p2_PWEB_livraria.Interfaces;
using p2_PWEB_livraria.Repositories;
using p2_PWEB_livraria.ViewModels;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace p2_PWEB_livraria.Controllers
{
    [Produces("application/json")]

    [Route("api/[controller]")]
    [ApiController]
    public class LoginsController : ControllerBase
    {
        private IUsuarioRepository _usuarioRepository { get; set; }

        public LoginsController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel login)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.ValidarEmailSenha(login.Email, login.Senha);

                if (usuarioBuscado == null)
                {
                    return NotFound("Email ou senha invalidos");
                }
                var minhasClaims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario.ToString()),
                    new Claim( "userName", usuarioBuscado.Nome.Split(' ').First() )

                };
                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("p2_PWEB_Livraria-chave-autenticacao"));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var meuToken = new JwtSecurityToken
                    (
                    issuer: "p2_PWEB_Livraria.webAPI",
                    audience: "p2_PWEB_Livraria.webAPI",
                    claims: minhasClaims,
                    expires: DateTime.Now.AddMinutes(15),
                    signingCredentials: creds
                    );
                return Ok
                    (
                    new { Token = new JwtSecurityTokenHandler().WriteToken(meuToken) }
                    );
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

    }
}
