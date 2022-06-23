using p2_PWEB_livraria.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace p2_PWEB_livraria.Interfaces
{
    interface ICarrinhoRepository
    {
        void AdicionarLivroAoMeuCarrinho(int idLivro, int idUsuarioLogado);

        void LimparCarrinho(int IdUsuarioLogado);

        List<Carrinho> ListarMeuCarrinho(int IdUsuarioLogado);
    }
}
