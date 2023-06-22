using Microsoft.EntityFrameworkCore;
using controlestoque.Models;

namespace controlestoque.Models
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options)
            : base(options)
        {

        }

        public DbSet<Cadastrousuario> Usuarios { get; set; }

        public DbSet<Produto> Produtos { get; set; }

        public DbSet<controlestoque.Models.Fornecedor>? Fornecedor { get; set; }



    }
}
