using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace controlestoque.Models;

public class Fornecedor
{
    [Key] 
    public int Codigo { get; set; }

    [Required(ErrorMessage = "Obrigatório informar o nome do fornecedor.")] 
    public string? Nome { get; set; }

    [ForeignKey("Cadastrousuario")] 
    public int Id { get; set; }

    
}
