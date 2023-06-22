using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace controlestoque.Models;

public class Produto
{
    [Key] 
    public int Codigo { get; set; }


    [Required(ErrorMessage = "Obrigatório informar o nome do produto.")] 
    public string? Nome { get; set; }
    
    
    [Required(ErrorMessage = "Obrigatório informar a descrição do produto.")] 
    public string? Descricao { get; set; }


    [ForeignKey("Fornecedor")] 
    public int FornecedorCodigo { get; set; }

    public decimal Preco { get; set; }

    public int Quantidade { get; set; }

    public decimal? Custo { get; set; }


    [ForeignKey("Cadastrousuario")] 
    public int Id { get; set; }

    public Fornecedor? Fornecedor { get; set; }

    
}
