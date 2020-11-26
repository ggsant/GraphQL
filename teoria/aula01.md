# Aula 01 

Nesse curso utilizaremos um projeto feito com [Node.JS](https://github.com/juunegreiros/agenda-petshop/) como base!
Alem disso, precisamos ter instalado o **npm**, o **Postman** e o **MySQL**  para fazer nossa base de dados.

# NPM 
A plataforma de software Node.js surgiu em 2009 e, desde então, centenas de milhares de aplicativos foram desenvolvidos nela. Uma das razões para o sucesso foi o npm , um gerenciador de pacotes popular que permite aos desenvolvedores JS compartilhar pacotes rapidamente.

**O que é npm?**

**npm (Node Package Manager)** é o gerenciador de pacotes JavaScript padrão desenvolvido com Node.js. O gerenciador npm tem duas partes:

* CLI (Command Line Interface) - uma ferramenta para hospedar e baixar pacotes,
* repositórios online contendo pacotes JS.

Você pode pensar na estrutura do repositório npmjs.com como um centro de distribuição que recebe produtos (pacotes npm) dos vendedores (autores do pacote) e distribui esses produtos aos compradores (usuários do pacote).
No centro de distribuição ( npmjs.com ), um exército de wombats trabalha como gerentes pessoais para cada cliente.npm CLI

# POSTMAN 

O Postman é uma ferramenta que dá suporte à documentação das requisições feitas pela API. Ele possui ambiente para a documentação, execução de testes de APIs e requisições em geral.

Ao utilizá-lo, você passará a trabalhar com APIs de modo mais eficiente, construindo solicitações rapidamente e, ainda, poderá guardá-las para uso posterior, além de conseguir analisar as respostas enviadas pela API.

**Um bom motivo para usar essa ferramenta é que, por meio dela, é possível reduzir drasticamente o tempo necessário para testar e desenvolver APIs.**

Em um exemplo prático, imagine que você queira fazer uma solicitação GET para procurar certas informações no nome da empresa.

Se fosse o caso de testar uma solicitação GET sem usar o Postman, você precisaria escrever todo um código para executar a requisição, além de uma interface visual para interagir com essa rotina.

Se fosse concedido, provavelmente você precisaria escrever tudo isso para criar um aplicativo funcional usando essa API, mas todo esse trabalho seria simplesmente para testar a sua funcionalidade, o que de fato, nesse formato, é tedioso e demorado.

Já com o Postman, esse teste é muito mais otimizado. Tudo o que precisa ser feito é:

* Obter a conexão da rota à barra de endereços;
* Selecionar o método de resposta GET na caixa suspensa à esquerda;
* Digitar a chave da API na seção "Headers";
* Especificar o formato da resposta, que poderia ser em JSON, por exemplo, e;
* Clicar em enviar.

Em seguida, será obtido os dados de resposta em JSON (simples e fácil de ler) acompanhado do código de status 200, que confirma que a solicitação GET foi bem-sucedida. Bem mais tranquilo, não?

# MySQL

MySQL, é um SGBD (Sistema Gerenciador de Banco de Dados) relacional, que utiliza a linguagem SQL (Structured Query Language, ou traduzindo, Linguagem de Consulta Estruturada). MySQL também é multiusuário e multitarefas.

Este SGBD inicialmente foi desenvolvido para trabalhar com projetos de pequeno e médio porte, com a capacidade de suportar por volta de cem milhões de registros em cada tabela, podendo chegar ao tamanho médio de aproximadamente cem megabytes por tabela, entretanto, esses eram os tamanhos recomendados nas primeiras versões. Porém, hoje em dia o MySQL ultrapassa extraordinariamente esses limites e capacidades das versões anteriores.

MySQL é conhecido por ser de fácil utilização, e usado por empresas que trabalham com grandes volumes de dados, tais como, NASA, Bradesco, HP, Sony entre outras grandes empresas de renome. Possui uma interface extremamente simples e é compatível com grande parte dos sistemas operacionais. Podemos dizer que essas são duas das grandes características que fazem o MySQL ser tão utilizado atualmente e estar em constante crescimento.

Mesmo sendo um dos bancos de dados mais utilizando em todo o mundo, MySQL continua em constante desenvolvimento, com atualizações frequentes.
