# Plano de Testes de Software

 
Os requisitos para realização dos testes de software são:
-   Site publicado na Internet
-   Navegador da Internet - Chrome, Firefox ou Edge
-   Conectividade de Internet para acesso ao site

Os testes funcionais a serem realizados no site são descritos a seguir.

## CT-01 – Verificação de login

### Requisitos Associados
- RF-01 O sistema deve verificar login válido.


### Objetivo do Teste
O sistema deve ser capaz de verificar se o login é valido ou invalido  

### Passos
1) Acessar o Navegador
2) informar o endereço do Site
3) A empresa/autônomo deve fazer o login


### Critérios de Êxito
- Se o login não for valido vai aparecer na tela do usuário 
“Usuário e/ou senha inválidos”

-	Caso o usuário tenha colocado os dados corretamente o login será validado e o usuário será redirecionado para a página inicial com o login feito

## CT-02 - Visualizar dados de estoque 

### Requisitos Associados
- RF-02 O site deve permitir ao usuário (microempresa/autônomo) ver os dados do estoque.


### Objetivo do Teste
Objetivo do Teste	Verificar os dados do estoque é confirmar a visualização do estoque ao cliente.  

### Passos
1) Acessar o Navegador
2) Informar o endereço do Site
3) A empresa/autônomo deve ser cadastrada no site e estar com o login feito.
4) A empresa/autônomo deve ter produtos no estoque.



### Critérios de Êxito
- Se a empresa/autônomo não tiver produtos no estoque não será possível ver os dados

-	Se a empresa/autônomo tiver os produtos os dados irá aparecer para visualização

## CT-03 – Gerenciar o estoque como um todo

### Requisitos Associados
- RF-03 O site deve permitir o cliente gerenciar o estoque ( cadastrar novo produto, alterar produto, remover produto).


### Objetivo do Teste
Verificar se o cadastro de produto está funcionando, assim como alterar as informações do produto e remover produto 

### Passos
1) Acessar o Navegador
2) informar o endereço do Site
3) A empresa/autônomo deve ser cadastrada no site e estar com o login feito
4) clicar em cadastrar novo produto
5) Adicionar o produto e suas respectivas informações e clicar em “Finalizar cadastro do produto”
6) Ir em gerenciar estoque e clicar em “remover produto“



### Critérios de Êxito
- Se o produto não for cadastrado com sucesso deve aparecer uma mensagem de erro “ o seu produto não foi cadastrado “

-	Se o produto for cadastrado com sucesso será possível a alteração dos dados do mesmo e também vai se tornar possível a remoção do produto




## CT-05 – Gerenciar dados do fornecedor 

### Requisitos Associados
- RF-05 O site deve permitir o cliente gerenciar os dados do fornecedor.


### Objetivo do Teste
Verificar se o cliente consegue gerenciar os dados do fornecedor 

### Passos
1) Acessar o Navegador
2) informar o endereço do Site
3) visualizar a página do fornecedor 
4) Visualizar os dados do fornecedor 


### Critérios de Êxito

## CT-06 – Emissão de relatório 

### Requisitos Associados
- RF-06 O sistema deve permitir a emissão de um relatório geral do estoque.


### Objetivo do Teste
Verificar se o relatório está sendo gerado corretamente 

### Passos
1) Acessar o Navegador
2) informar o endereço do Site
3) A empresa/autônomo deve ser cadastrada no site e estar com o login feito
4) clicar em estoque
5) clicar em gerenciar estoque
6) no início do estoque clicar em “Emitir relatório geral”



### Critérios de Êxito
- A empresa/autônomo deve possuir um estoque para que o relatório seja emitido caso contrário não será possível

-	Caso a empresa/autônomo tenha produtos em seu estoque e clique em emitir relatório geral um pop-up irá abrir com o relatório pronto para ser impresso


## CT-07 – Emissão do relatório de reposição

### Requisitos Associados
- RF-07 O sistema deve permitir a emissão de um relatório reposição de estoque.

### Objetivo do Teste
Verificar se o relatório de reposição está sendo emitido 

### Passos
1) Acessar o Navegador
2) informar o endereço do Site
3) A empresa/autônomo deve ser cadastrada no site e estar com o login feito
4) clicar em estoque
5) clicar em gerenciar estoque
6) no início do estoque clicar em “Emitir relatório de reposição”



### Critérios de Êxito
-	A empresa/autônomo deve possuir um estoque para que o relatório seja emitido caso contrário não será possível.

-	Caso a empresa/autônomo tenha produtos em seu estoque e clique em emitir relatório de reposição um pop-up irá abrir com os produtos que precisam ser repostos





# Plano de Testes de Software - Etapa 04


## CT-02 - Compartilhar produtos presentes no estoque

### Requisitos Associados
- RF-02 O site deve permitir ao usuário (microempresa/autônomo) ver os dados do estoque e compartilha-o.


### Objetivo do Teste
Objetivo do Teste Verificar os dados do estoque e verificar se é possível o compartilhamento do estoque.


### Passos
1) Acessar o Navegador
2) Informar o endereço do Site
3) A empresa/autônomo deve ser cadastrada no site e estar com o login feito.
4) A empresa/autônomo deve ter produtos no estoque.



### Critérios de Êxito
- Se a empresa/autônomo não tiver produtos no estoque não será possível ver os dados e compartilhar tal

-	Se a empresa/autônomo tiver os produtos os dados irá aparecer para visualização e o compartilhamento irá funcionar corretamente



## CT-04 – Gerenciar perfil

### Requisitos Associados
- RF-04 O sistema deve permitir o gerenciamento do perfil ( alterar dados do perfil )


### Objetivo do Teste
O objetivo deste teste é tornar possível a alteração dos dados do perfil do usuário 

### Passos
1) Acessar o Navegador
2) informar o endereço do Site
3) A empresa/autônomo deve ser cadastrada no site e estar com o login feito
4) clicar no perfil da empresa/autônomo
5) Clicar em “Alterar dados”
6) Alterar os dados e depois clicar em “Salvar”



### Critérios de Êxito
- Se o usuário deixar alguma informação que seja necessária sem preencher as alterações não serão possíveis (vai aparecer um aviso para que preencha o que falta)

-	Caso o usuário preencha tudo corretamente basta que ele clique em “Salvar” assim todas as suas alterações feitas serão salvas e vão aparecer no seu perfil logo em seguida
