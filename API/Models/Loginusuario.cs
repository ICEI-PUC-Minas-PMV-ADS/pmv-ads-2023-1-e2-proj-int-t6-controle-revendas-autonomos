using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace controlestoque.Models
{
    [Table("Login")]
    public class Loginusuario
    {
        [Display(Name = "Email")]
        [Column("Email")]
        public string? Email { get; set; }

        [Display(Name = "Senha")]
        [Column("Senha")]
        public string? Senha { get; set; }
    }
}
