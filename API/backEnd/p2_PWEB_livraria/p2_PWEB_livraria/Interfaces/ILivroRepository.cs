using p2_PWEB_livraria.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace p2_PWEB_livraria.Interfaces
{
    interface ILivroRepository
    {
        List<Livro> ListarTodosOsLivros();

        Livro ListarLivroPorId(int idLivro);

        List<Livro> BuscarLivrosPorTitulo(string tituloLivro);
    }
}
