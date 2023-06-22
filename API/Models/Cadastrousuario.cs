using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace controlestoque.Models
{
    [Table("Cadastrousuario")]
    public class Cadastrousuario
    {
        [Display(Name = "Id")]
        [Column("Id")]
        public int Id { get; set; }

        [Display(Name = "Nome")]
        [Column("Nome")]
        public string? Nome { get; set; }

        [Display(Name = "Email")]
        [Column("Email")]
        public string? Email { get; set; }

        [Display(Name = "Senha")]
        [Column("Senha")]
        public string? Senha { get; set; }

        [Display(Name = "Confirmar sua senha")]
        [Column("Confirmar sua senha")]
        public string? Confsenha { get; set; }

        [Display(Name = "Endereço")]
        [Column("Endereço")]
        public string? Endereco { get; set; }

        [Display(Name = "Cidade")]
        [Column("Cidade")]
        public string? Cidade { get; set; }

        [Display(Name = "Descrição")]
        [Column("Descrição")]
        public string? Descricao { get; set; }
    }
}
