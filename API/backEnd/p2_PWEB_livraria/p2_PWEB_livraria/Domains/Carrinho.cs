using System;
using System.Collections.Generic;

#nullable disable

namespace p2_PWEB_livraria.Domains
{
    public partial class Carrinho
    {
        public int IdCarrinho { get; set; }
        public int? IdLivro { get; set; }
        public int? IdUsuario { get; set; }
        public byte QtdeCompra { get; set; }
        public decimal ValorTotal { get; set; }
        public DateTime DataAcesso { get; set; }

        public virtual Livro IdLivroNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
