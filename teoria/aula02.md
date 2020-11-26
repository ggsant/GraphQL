# Aula 02

Na nossa aplicação, trabalharemos com uma API feita em Node.js, que possui quatro entidades: atendimento.js, cliente.js, pet.js, servico.js.

* O cliente é para quem vendemos o serviço, que pode ser, por exemplo, banho e tosa, ou cortar unhas. 
* O pet se refere ao animal de estimação de um determinado cliente, pertencendo a ele. Sendo assim, o cliente sempre será o alvo do nosso serviço. 
* O atendimento é a junção das demais entidades, e as contém, além de outras informações como data.

A  API serve vários aplicativos, tanto mobile quanto web. Para entendermos melhor como ela funciona, abriremos **server.js**, que é o aplicativo que está rodando o servidor para nós. Utilizamos o **customExpress** para rodá-lo, e quando ele se inicia, fazemos uma conexão com a base de dados para a criação das tabelas, sendo, portanto, criadas automaticamente. E pedimos para que a porta 4000 seja ouvida.

# Cadastro de clientes
Vamos utilizar o Postman, para fazermos requisições web, para envio e recebimento de dados. Abaixo de "Untitled Request" e ao lado de "GET" digitaremos localhost:4000/clientes, e então pressionaremos o botão "Send". Em "Body" teremos um array vazio, de novo, porque não temos nenhum dado em transição. A diferença de fazermos isso pelo Postman ou pelo navegador é que no primeiro caso poderemos usar outras requisições, como POST, PUT, PATCH, enquanto no navegador só conseguimos enviar como GET.

Assim, se colocarmos POST e voltarmos a cliente.js, conseguiremos ver em nossa aplicação (API) a criação da rota /clientes/cliente, portanto colocamos localhost:4000/clientes/cliente no Postman. No entanto, não sabemos o que está sendo esperado no body, pois enviamos o cliente inteiro para adiciona.

Portanto, navegaremos em nossas pastas mais uma vez, e acessaremos "infraestrutura > crud > cliente.js". Neste arquivo, temos o método adiciona(), para o qual passamos res e item, que é o cliente, que espera nome e cpf. Ou seja, precisaremos enviar estas informações ao servidor, e para isto voltaremos ao Postman, clicaremos na aba "Body" no menu localizado abaixo da barra com a URL, marcaremos x-www.form-urlencoded, e na coluna Key digitaremos nome, em Value, mantendo Description vazio. Da mesma forma, inseriremos outra Key, cpf, com valor 12345678910, e pressionaremos o botão "Send". Abaixo, em "Body", não teremos nenhum objeto, retornando-se o status do servidor, do que é realizado ou alterado. Dentre as informações, está que apenas uma linha foi afetada, e que o ID da linha que acabamos de inserir é 1. Assim, inserimos nosso primeiro cliente!

Ao lado da barra de URL, alteraremos "POST" por "GET" e enviaremos a URL localhost:4000/clientes/ para verificar se tudo acontece conforme esperado. Em "Body", são exibidos todos os dados do cliente que acabamos de cadastrar. Atualmente, em nosso CRUD temos cinco operações para cada uma das nossas entidades.

Todas elas terão as opções de:

* criar;
* atualizar;
* deletar;
* listar (todos);
* listar (apenas um), via buscaPorId.

Entretanto, agora temos um novo botão, por enquanto apenas no front end — ainda não na versão mobile —, capaz de listar todos os pets dos clientes. Se clicarmos nos clientes, também poderemos acessar os pets correspondentes. Faremos isto também no back end, para aliviar a carga que só fica no frond end.

A primeira solução em que pensamos será criar várias URLs para o front consumir, então, para pegarmos os pets dos clientes poderíamos utilizar localhost:4000/clientes/1/pets, em que 1 se refere ao ID do cliente. Assim, teríamos que fazer 4 rotas diferentes. Porém, na tela de atendimento atual já consumimos 3 URLs distintos: na tela de atendimento, precisamos saber quais são todos os clientes, bem como em relação aos pets e serviços, uma vez que o atendimento precisa destas entidades para funcionar.

Acaba sendo uma carga muito grande para ser criada e consumida, e teríamos que criar mais URLs quanto maior ficar a nossa listagem. Então, decidimos incluir a GraphQL em nosso sistema, e esta é a nossa missão, de modo a criarmos apenas uma URL, para que o consumo seja feito em apenas um local e, se eventualmente o mobile também quiser consumir as APIs, ele não precisará fazer mais nada, podendo consumi-la diretamente.

Sendo assim, conseguiremos trabalhar de modo a não atrapalhar nenhum lugar e, ainda, fazer funcionar nosso sistema.