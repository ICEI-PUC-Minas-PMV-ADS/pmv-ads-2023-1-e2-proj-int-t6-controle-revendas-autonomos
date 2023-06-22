using controlestoque.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Npgsql;

namespace controlestoque.Controllers
{
    public class LoginController : Controller
    {
      public async Task<IActionResult> Logar(string Email, string Senha)
        {
            NpgsqlConnection npgSqlConnection = new NpgsqlConnection("host=localhost;port=5432;Database=controlestoque; user Id=postgres;password=12345;sslmode=prefer;");
            await npgSqlConnection.OpenAsync();

            NpgsqlCommand npgSqlCommand = npgSqlConnection.CreateCommand();
            npgSqlCommand.CommandText = $"SELECT * FROM public.\"Cadastrousuario\" where \"Email\" = '{Email}' and \"Senha\" = '{Senha}'";

            NpgsqlDataReader reader = npgSqlCommand.ExecuteReader();

            if(reader.Read())
            {
                return RedirectToAction("Index", "Home");
            }
            else
            {
                return View();
            }




            /*
            if (await reader.ReadAsync())
            {
                return RedirectToAction("Index", "Home");
            }

           
            return Json(new { Msg = "Usuario não encontrado! Verifique suas credenciais!" });
           */

        }
   
    }
}
