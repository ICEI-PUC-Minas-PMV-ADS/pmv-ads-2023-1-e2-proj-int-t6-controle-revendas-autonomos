using ProjetoEstoque.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ProjetoEstoque.Data.Dtos;

public class UpdateProdutoDto
{
    [Key] public int Codigo { get; set; }

    [Required(ErrorMessage = "Obrigatório informar o nome do produto.")]
    public string Nome { get; set; }

    [Required(ErrorMessage = "Obrigatório informar a descrição do produto.")]
    [StringLength(200, ErrorMessage = "O tamanho da descrição não pode exceder 200 caracteres")]
    public string Descricao { get; set; }
    [ForeignKey("Fornecedor")] public int FornecedorCodigo { get; set; }
    public decimal Preco { get; set; }
    public int Quantidade { get; set; }
    public decimal? Custo { get; set; }
    [ForeignKey("Usuario")] public int UsuarioId { get; set; }
    public Fornecedor Fornecedor { get; set; }
    public Usuario Usuario { get; set; }
}
