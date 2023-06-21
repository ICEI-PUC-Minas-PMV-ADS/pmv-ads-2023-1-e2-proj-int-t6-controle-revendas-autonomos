using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoEstoque.Data.Dtos;
using Microsoft.AspNetCore.JsonPatch;
using ProjetoEstoque.Data;
using ProjetoEstoque.Models;

namespace ProjetoEstoque.Controllers;

[ApiController]
[Route("[controller]")]
public class ProdutoController : ControllerBase
{
    private ProdutoContext _context;
    private IMapper _mapper;

    public ProdutoController(ProdutoContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;

    }
    /// <summary>
    /// Adiciona um produto ao banco de dados
    /// </summary>
    /// <param name="produtoDto">Objeto com os campos necessários para criação de um produto</param>
    /// <returns>IActionResult</returns>
    /// <response code="201">Caso inserção seja feita com sucesso</response>

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public IActionResult AdiconaProduto([FromBody] CreateProdutoDto produtoDto)
    {
        Produto produto = _mapper.Map<Produto>(produtoDto);
        _context.Produtos.Add(produto);
        _context.SaveChanges();
        return CreatedAtAction(nameof(ListaProdutoPorId), new { id = produto.Codigo }, produto);
    }

    [HttpGet]
    public IEnumerable<ReadProdutoDto> ListaProdutos([FromQuery] int skip = 0, [FromQuery] int take = 50)
    {
        return _mapper.Map<List<ReadProdutoDto>>(_context.Produtos.Skip(skip).Take(take));
    }

    [HttpGet("{id}")]
    public IActionResult ListaProdutoPorId(int id)
    {
        var produto = _context.Produtos.FirstOrDefault(produto => produto.Codigo == id);
        if (produto == null) return NotFound();
        var produtoDto = _mapper.Map<ReadProdutoDto>(produto);
        return Ok(produtoDto);

    }

    [HttpPut("{id}")]
    public IActionResult AtualizaProduto(int id, [FromBody] UpdateProdutoDto produtoDto)
    {
        var produto = _context.Produtos.FirstOrDefault(produto => produto.Codigo == id);
        if (produto == null) return NotFound();
        _mapper.Map(produtoDto, produto);
        _context.SaveChanges();
        return NoContent();

    }


    [HttpPatch("{id}")]
    public IActionResult AtualizaProdutoParcial(int id, JsonPatchDocument<UpdateProdutoDto> patch)
    {
        var produto = _context.Produtos.FirstOrDefault(produto => produto.Codigo == id);
        if (produto == null) return NotFound();

        var produtoParaAtualizar = _mapper.Map<UpdateProdutoDto>(produto);

        patch.ApplyTo(produtoParaAtualizar, ModelState);

        if (!TryValidateModel(produtoParaAtualizar))
        {
            return ValidationProblem(ModelState);

        }

        _mapper.Map(produtoParaAtualizar, produto);
        _context.SaveChanges();
        return NoContent();
    }


    [HttpDelete("{id}")]
    public IActionResult DeletaProduto(int id)
    {
        var produto = _context.Produtos.FirstOrDefault(produto => produto.Codigo == id);
        if (produto == null) return NotFound();
        _context.Remove(produto);
        _context.SaveChanges();
        return NoContent();

    }
}
