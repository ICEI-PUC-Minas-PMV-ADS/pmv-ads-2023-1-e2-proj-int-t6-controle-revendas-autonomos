using Microsoft.EntityFrameworkCore;
using ProjetoEstoque.Models;

namespace ProjetoEstoque.Data;

public class ProdutoContext : DbContext
{
    public ProdutoContext(DbContextOptions<ProdutoContext> opts) : base(opts)
    {

    }
    public DbSet<Produto> Produtos { get; set; }
}