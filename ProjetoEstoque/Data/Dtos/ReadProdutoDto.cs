using ProjetoEstoque.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ProjetoEstoque.Data.Dtos;

public class ReadProdutoDto
{
    public int Codigo { get; set; }
    public string Nome { get; set; }
    public string Descricao { get; set; }
    public int FornecedorCodigo { get; set; }
    public decimal Preco { get; set; }
    public int Quantidade { get; set; }
    public decimal? Custo { get; set; }
    public int UsuarioId { get; set; }
    public Fornecedor Fornecedor { get; set; }
    public Usuario Usuario { get; set; }

}
