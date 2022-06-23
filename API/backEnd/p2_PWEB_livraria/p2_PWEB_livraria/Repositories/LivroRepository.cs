using p2_PWEB_livraria.Contexts;
using p2_PWEB_livraria.Domains;
using p2_PWEB_livraria.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace p2_PWEB_livraria.Repositories
{
    public class LivroRepository : ILivroRepository
    {
        P2_PWEB_Livraria metodos = new P2_PWEB_Livraria();

        public List<Livro> ListarTodosOsLivros()
        {
            return metodos.Livros.ToList();
        }
    }
}
