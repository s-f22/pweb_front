using p2_PWEB_livraria.Contexts;
using p2_PWEB_livraria.Domains;
using p2_PWEB_livraria.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace p2_PWEB_livraria.Repositories
{
    public class CarrinhoRepository : ICarrinhoRepository
    {
        P2_PWEB_Livraria metodos = new P2_PWEB_Livraria();


        public void AdicionarLivroAoMeuCarrinho(int idLivro, int idUsuarioLogado)
        {
            //carrega os livros do usuario logado numa lista
            List<Carrinho> meusItensNoCarrinho = metodos.Carrinhos.Where(c => c.IdUsuario == idUsuarioLogado).ToList();

            //cria um novo livro com o id de referencia recebido
            Livro novoLivro = metodos.Livros.FirstOrDefault(l => l.IdLivro == idLivro);

            //carrefa as infos do usuario logado
            Usuario usuarioAtual = metodos.Usuarios.FirstOrDefault(u => u.IdUsuario == idUsuarioLogado);

            //verifica se o livro a adicionar ja existe na lista na lista de itens (carrinho) do usuario atual;
            //se nao existir, cria e acrescenta
            //se existir, soma 1 a qtde total e soma o valor de mais uma unidade
            if (meusItensNoCarrinho.Find(b => b.IdLivro == novoLivro.IdLivro) == null)
            {
                Carrinho novoItem = new Carrinho()
                {
                    IdLivro = novoLivro.IdLivro,
                    IdUsuario = usuarioAtual.IdUsuario,
                    QtdeCompra = 1,
                    ValorTotal = novoLivro.PrecoUnitario,
                    DataAcesso = DateTime.Now
                };
                meusItensNoCarrinho.Add(novoItem);
            }
            else
            {
                meusItensNoCarrinho.Find(b => b.IdLivro == novoLivro.IdLivro).QtdeCompra += 1;
                meusItensNoCarrinho.Find(b => b.IdLivro == novoLivro.IdLivro).ValorTotal += novoLivro.PrecoUnitario;
                meusItensNoCarrinho.Find(b => b.IdLivro == novoLivro.IdLivro).DataAcesso = DateTime.Now;
            }

            metodos.SaveChanges();
            
        }

        public void LimparCarrinho(int IdUsuarioLogado)
        {
            List<Carrinho> meusItensNoCarrinho = metodos.Carrinhos.Where(c => c.IdUsuario == IdUsuarioLogado).ToList();

            foreach (var item in meusItensNoCarrinho)
            {
                item.QtdeCompra = 0;
                item.ValorTotal = 0;
                item.DataAcesso = DateTime.Now;
            }

            metodos.SaveChanges();
        }

        public List<Carrinho> ListarMeuCarrinho(int IdUsuarioLogado)
        {

            return metodos.Carrinhos.Where(c => c.IdUsuario == IdUsuarioLogado).ToList();
        }
    }
}
