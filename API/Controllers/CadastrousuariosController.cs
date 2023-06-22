using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using controlestoque.Models;


namespace controlestoque.Controllers
{


    public class CadastrousuariosController : Controller
    {
        private readonly Contexto _context;

        public CadastrousuariosController(Contexto context)
        {
            _context = context;
        }



        // GET: Cadastrousuarios
        public async Task<IActionResult> Index()
        {
              return _context.Usuarios != null ? 
                          View(await _context.Usuarios.ToListAsync()) :
                          Problem("Entity set 'Contexto.Usuarios'  is null.");
        }

        // GET: Cadastrousuarios/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Usuarios == null)
            {
                return NotFound();
            }

            var cadastrousuario = await _context.Usuarios
                .FirstOrDefaultAsync(m => m.Id == id);
            if (cadastrousuario == null)
            {
                return NotFound();
            }

            return View(cadastrousuario);
        }

        // GET: Cadastrousuarios/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Cadastrousuarios/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Nome,Email,Senha,Confsenha,Endereco,Cidade,Descricao")] Cadastrousuario cadastrousuario)
        {
            if (ModelState.IsValid)
            {
                _context.Add(cadastrousuario);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index", "Home");
            }
            return View(cadastrousuario);
        }

        // GET: Cadastrousuarios/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Usuarios == null)
            {
                return NotFound();
            }

            var cadastrousuario = await _context.Usuarios.FindAsync(id);
            if (cadastrousuario == null)
            {
                return NotFound();
            }
            return View(cadastrousuario);
        }

        // POST: Cadastrousuarios/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Nome,Email,Senha,Confsenha,Endereco,Cidade,Descricao")] Cadastrousuario cadastrousuario)
        {
            if (id != cadastrousuario.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(cadastrousuario);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CadastrousuarioExists(cadastrousuario.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(cadastrousuario);
        }

        // GET: Cadastrousuarios/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Usuarios == null)
            {
                return NotFound();
            }

            var cadastrousuario = await _context.Usuarios
                .FirstOrDefaultAsync(m => m.Id == id);
            if (cadastrousuario == null)
            {
                return NotFound();
            }

            return View(cadastrousuario);
        }

        // POST: Cadastrousuarios/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Usuarios == null)
            {
                return Problem("Entity set 'Contexto.Usuarios'  is null.");
            }
            var cadastrousuario = await _context.Usuarios.FindAsync(id);
            if (cadastrousuario != null)
            {
                _context.Usuarios.Remove(cadastrousuario);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CadastrousuarioExists(int id)
        {
          return (_context.Usuarios?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
