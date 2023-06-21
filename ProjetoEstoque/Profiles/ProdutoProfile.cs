﻿using ProjetoEstoque.Data.Dtos;
using AutoMapper;
using ProjetoEstoque.Models;

namespace ProjetoEstoque.Profiles;

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