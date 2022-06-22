using p2_PWEB_livraria.Contexts;
using p2_PWEB_livraria.Domains;
using p2_PWEB_livraria.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace p2_PWEB_livraria.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {

        P2_PWEB_Livraria metodos = new P2_PWEB_Livraria();


        public Usuario BuscarPorId(int idUsuario)
        {
            return metodos.Usuarios.FirstOrDefault(u => u.IdUsuario == idUsuario);
        }


        public void Cadastrar(Usuario novoUsuario)
        {
            metodos.Usuarios.Add(novoUsuario);
            metodos.SaveChanges();
        }


        public Usuario ValidarEmailSenha(string email, string senha)
        {
            return metodos.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
