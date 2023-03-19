# Especificações do Projeto

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

|Irene Rodrigues| ![Persona 1](img/Personas/Persona1.jpg) |
|-----------------------|-|
|Idade:|61|
|Ocupação:| Empreendedora Mary Kay |
|Aplicativos:| Instagram, Whatsapp|
|Motivações | Sempre foi apaixonada por produtos de beleza e gosta de transformar o bem estar das pessoas atraves do conhecimento de seus produtos|
|Frustrações | Tem dificuldade em lembrar tudo que está em estoque |
|Ferramentas que usa na gestão | Anotações em um caderninho |

|Deidison Tadeu| ![Persona 2](img/Personas/Persona2.jpeg) |
|-----------------------|-|
|Idade:|33|
|Ocupação:| Microempresario de Produtos de Limpeza |
|Aplicativos:| Whatsapp |
|Motivações | Após ficar desempregado, tive a oportunidade de revender produtos de limpeza e abracei|
|Frustrações | Por fazer o controle em notas e caderno, algumas informações acabam se perdendo ou se misturando|
|Ferramentas que usa na gestão | Anotações em um caderninho e acompanhamento com notas de fornecedores|

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR` |
|--------------------|------------------------------------|----------------------------------------|
|Irene Rodrigues | Registrar minhas aquisições de materias | Não esquecer o que ja foi ou precisa ser adquirido |
|Deidson Tadeu | Relatorio de estoque | Permitir que possam administrar novas aquisições |
|Deidson Tadeu |Resumo do que tenho em estoque e quantidades|Controlando as vendas de mercadorias dentro e fora da empresa|
|Deidson Tadeu | Cadastrar cada produto vinculado ao seu fornecimento|Saber qual produto pertence determinado forncedor|
|Irene Rodrigues | Poder compartilhar meu estoque | Conseguir uma venda sem a necessidade de me lembrar de tudo que possuo |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve permitir ao usuário (microempresa/autonômo) dados do estoque e compartilhar-o | ALTA | 
|RF-002| O site deve permitir o cliente gerenciar o estoque ( cadastrar novo produto, alterar produto, remover produto)  | ALTA |
|RF-003| O sistema deve permitir o gerenciamento do perfil ( alterar dados do perfil )  | ALTA |
|RF-004| O site deve permitir o cliente gerenciar os dados do fornecedor  | MÉDIA |
|RF-005| O sistema deve permitir a emissão de um relatório geral do estoque  | MÉDIO |
|RF-006| O sistema deve permitir a emissão de um relatório reposição de estoque  | MÉDIA |
|RF-007| O sistema deve verificar login válido  | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku) | MÉDIA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |  ALTA |
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade  |  MÉDIA | 
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) |  ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


## Diagrama de Casos de Uso

![Imagem Diagrama Caso de Uso](img/DiagramaCasoUso.jpeg)
