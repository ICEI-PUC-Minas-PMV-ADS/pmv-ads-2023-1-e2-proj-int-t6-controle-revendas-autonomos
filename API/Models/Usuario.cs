using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Emit;
using Microsoft.EntityFrameworkCore;

namespace controlestoque.Models

{
    public class Usuario
    {
        [Key] public int Id { get; set; }
        [Required(ErrorMessage = "Obrigatório informar o nome do usuário.")] public string? Nome { get; set; }
        [Required(ErrorMessage = "Obrigatório informar o email do usuário.")] public string? Email { get; set; }
        [Required(ErrorMessage = "Obrigatório informar a senha do usuário.")] public string? Senha { get; set; }
    }
}


    