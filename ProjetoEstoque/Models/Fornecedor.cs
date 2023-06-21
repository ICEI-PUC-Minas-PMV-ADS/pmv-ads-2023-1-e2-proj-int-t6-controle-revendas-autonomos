using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ProjetoEstoque.Models;

public class Fornecedor
{
    [Key] 
    public int Codigo { get; set; }

    [Required(ErrorMessage = "Obrigatório informar o nome do fornecedor.")] 
    public string Nome { get; set; }

    [ForeignKey("Usuario")] 
    public int UsuarioId { get; set; }

    public Usuario Usuario { get; set; }
}
