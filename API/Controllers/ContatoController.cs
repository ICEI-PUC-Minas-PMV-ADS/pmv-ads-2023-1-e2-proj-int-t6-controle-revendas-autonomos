using Microsoft.AspNetCore.Mvc;

namespace controlestoque.Controllers
{
    public class ContatoController : Controller
    {
        public IActionResult Index()
        {
            return View("Contatousuario");
        }
    }
}
