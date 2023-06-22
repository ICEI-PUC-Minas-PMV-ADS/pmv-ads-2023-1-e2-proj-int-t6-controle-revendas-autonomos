using controlestoque.Data.Dtos;
using AutoMapper;
using controlestoque.Models;

namespace controlestoque.Profiles;

public class ProdutoProfile : Profile
{
    public ProdutoProfile()
    {
        CreateMap<CreateProdutoDto, Produto>();
        CreateMap<UpdateProdutoDto, Produto>();
        CreateMap<Produto, UpdateProdutoDto>();
        CreateMap<Produto, ReadProdutoDto>();

    }
}