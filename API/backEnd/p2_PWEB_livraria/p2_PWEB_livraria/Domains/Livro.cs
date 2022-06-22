using System;
using System.Collections.Generic;

#nullable disable

namespace p2_PWEB_livraria.Domains
{
    public partial class Livro
    {
        public Livro()
        {
            Carrinhos = new HashSet<Carrinho>();
        }

        public int IdLivro { get; set; }
        public string Titulo { get; set; }
        public string Genero { get; set; }
        public string Autor { get; set; }
        public string Editora { get; set; }
        public DateTime AnoLancamento { get; set; }
        public byte QtdeEstoque { get; set; }
        public decimal PrecoUnitario { get; set; }
        public string Descricao { get; set; }
        public bool? Destaque { get; set; }
        public string CaminhoImagem { get; set; }

        public virtual ICollection<Carrinho> Carrinhos { get; set; }
    }
}
