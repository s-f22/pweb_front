using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using p2_PWEB_livraria.Domains;

#nullable disable

namespace p2_PWEB_livraria.Contexts
{
    public partial class P2_PWEB_Livraria : DbContext
    {
        public P2_PWEB_Livraria()
        {
        }

        public P2_PWEB_Livraria(DbContextOptions<P2_PWEB_Livraria> options)
            : base(options)
        {
        }

        public virtual DbSet<Carrinho> Carrinhos { get; set; }
        public virtual DbSet<Livro> Livros { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=PANZERII\\SQLEXPRESS; initial catalog=P2_PWEB_LIVRARIA; user Id=sa; pwd=senai@#132;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Carrinho>(entity =>
            {
                entity.HasKey(e => e.IdCarrinho)
                    .HasName("PK__carrinho__3A1F27A223AE8DDC");

                entity.ToTable("carrinho");

                entity.Property(e => e.IdCarrinho).HasColumnName("idCarrinho");

                entity.Property(e => e.DataAcesso)
                    .HasColumnType("datetime")
                    .HasColumnName("dataAcesso");

                entity.Property(e => e.IdLivro).HasColumnName("idLivro");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.QtdeCompra).HasColumnName("qtdeCompra");

                entity.Property(e => e.ValorTotal)
                    .HasColumnType("money")
                    .HasColumnName("valorTotal");

                entity.HasOne(d => d.IdLivroNavigation)
                    .WithMany(p => p.Carrinhos)
                    .HasForeignKey(d => d.IdLivro)
                    .HasConstraintName("FK__carrinho__idLivr__300424B4");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Carrinhos)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__carrinho__idUsua__30F848ED");
            });

            modelBuilder.Entity<Livro>(entity =>
            {
                entity.HasKey(e => e.IdLivro)
                    .HasName("PK__livro__63C546D76A1D49A6");

                entity.ToTable("livro");

                entity.HasIndex(e => e.Titulo, "UQ__livro__38FA640FFA52CEFD")
                    .IsUnique();

                entity.Property(e => e.IdLivro).HasColumnName("idLivro");

                entity.Property(e => e.AnoLancamento)
                    .HasColumnType("date")
                    .HasColumnName("anoLancamento");

                entity.Property(e => e.Autor)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("autor");

                entity.Property(e => e.CaminhoImagem)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("caminhoImagem")
                    .HasDefaultValueSql("('livroPadrao')");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("descricao");

                entity.Property(e => e.Destaque)
                    .HasColumnName("destaque")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Editora)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("editora");

                entity.Property(e => e.Genero)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("genero");

                entity.Property(e => e.PrecoUnitario)
                    .HasColumnType("money")
                    .HasColumnName("precoUnitario");

                entity.Property(e => e.QtdeEstoque).HasColumnName("qtdeEstoque");

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("titulo");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__usuario__645723A663711C85");

                entity.ToTable("usuario");

                entity.HasIndex(e => e.Telefone, "UQ__usuario__2A16D97F4B612124")
                    .IsUnique();

                entity.HasIndex(e => e.Email, "UQ__usuario__AB6E61648DEEE3C5")
                    .IsUnique();

                entity.HasIndex(e => e.Cpf, "UQ__usuario__D836E71FE701F5B1")
                    .IsUnique();

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.CaminhoFotoPerfil)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("caminhoFotoPerfil")
                    .HasDefaultValueSql("('userPadrao')");

                entity.Property(e => e.Cpf)
                    .IsRequired()
                    .HasMaxLength(14)
                    .IsUnicode(false)
                    .HasColumnName("cpf")
                    .IsFixedLength(true);

                entity.Property(e => e.DataNascimento)
                    .HasColumnType("date")
                    .HasColumnName("dataNascimento");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("senha");

                entity.Property(e => e.Telefone)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("telefone");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
