using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace ProjetoEstoque.Models;

public class Produto
{
    [Key] 
    public int Codigo { get; set; }


    [Required(ErrorMessage = "Obrigatório informar o nome do produto.")] 
    public string Nome { get; set; }
    
    
    [Required(ErrorMessage = "Obrigatório informar a descrição do produto.")] 
    public string Descricao { get; set; }


    [ForeignKey("Fornecedor")] 
    public int FornecedorCodigo { get; set; }

    public decimal Preco { get; set; }

    public int Quantidade { get; set; }

    public decimal? Custo { get; set; }


    [ForeignKey("Usuario")] 
    public int UsuarioId { get; set; }

    public Fornecedor Fornecedor { get; set; }

    public Usuario Usuario { get; set; }
}
