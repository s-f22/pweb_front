using System;
using System.Collections.Generic;

#nullable disable

namespace p2_PWEB_livraria.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Carrinhos = new HashSet<Carrinho>();
        }

        public int IdUsuario { get; set; }
        public string Nome { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Cpf { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string CaminhoFotoPerfil { get; set; }

        public virtual ICollection<Carrinho> Carrinhos { get; set; }
    }
}
