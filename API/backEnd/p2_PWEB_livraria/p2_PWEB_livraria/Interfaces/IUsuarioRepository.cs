using p2_PWEB_livraria.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace p2_PWEB_livraria.Interfaces
{
    interface IUsuarioRepository
    {
   
        Usuario BuscarPorId(int idUsuario);


        void Cadastrar(Usuario novoUsuario);


        
        Usuario ValidarEmailSenha(string email, string senha);

        public void EnviaEmailRecSenha(string email);

        //List<Livro> ListarMeusLivros(int idUsuarioLogado);

        //void SalvarLivroNoCarrinho(int IdLivro, int qtde);
    }
}
