using Microsoft.AspNetCore.Mvc;

namespace controlestoque.Controllers
{
    public class PerfilController : Controller
    {
        public IActionResult Index()
        {
            return View("Perfilusuario");
        }
    
    }
}
