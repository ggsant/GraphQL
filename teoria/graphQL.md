
<img width="890" alt="graphql" src="https://user-images.githubusercontent.com/61892998/100355434-8110d880-2fd0-11eb-89e3-58d629e878e0.png">


# Teoria 

Nesse curso utilizaremos um projeto feito com [Node.JS](https://github.com/juunegreiros/agenda-petshop/) como base!
Alem disso, precisamos ter instalado o **npm**, o **Postman** e o **MySQL**  para fazer nossa base de dados.
# GraphQL

            Descreva seus dados. Peça o que quiser. Tenha resultados previsíveis — graphql.org

GraphQL significa Graph Query Language, como o próprio nome sugere, é uma linguagem de consulta, assim como SQL (Structured Query Language), mas seu uso não envolve a implementação de um banco de dados, mas sim a definição de dados para uma API ou servidor.

Criado pelo Facebook, GraphQL é uma sintaxe que descreve a forma de solicitar dados. Geralmente é usado para passar dados do servidor para o cliente. GraphQL tem três características principais:

* Ele permite que o cliente especifique exatamente os dados que deseja.
* Agrega facilmente dados de várias fontes.
* Usa um sistema de tipos para descrever os dados.

Usando GraphQL, o usuário pode fazer uma chamada única para obter todas as informações de que precisa. Ao contrário do que acontece na arquitetura REST, é necessário fazer várias solicitações para buscar as mesmas informações.

# Graph
O graph em GraphQL é utilizado ​​para gráficos. A equipe do Facebook responsável pela linguagem aposta em modelos gráficos mentais para definir os dados. Dessa forma, a linguagem fornece a capacidade de modelar dados usando padrões. O resultado é um exemplo muito semelhante ao formato JSON. Por exemplo, para definir os dados do usuário representando ID, nome, e-mail, cpf, nascimento e numero de telefone, teremos a seguinte estrutura:

                                    type User {
                                        id: ID
                                        name: String
                                        email: String
                                        cpf: String
                                        nasc: String
                                        tel: String
                                    }

# QL

No entanto, a recomendação do GraphQL não é apenas definir os dados no esquema, mas também permitir que os usuários desses dados os utilizem de forma padronizada. Isso é o que o termo QL significa, porque podemos usar a linguagem de consulta para chamar e usar esses dados. Portanto, para usar os dados de uso de exemplo do usuário acima, podemos fazer a seguinte consulta:

                                    query getUsers {
                                        users {
                                            name
                                            email
                                            cpf
                                        }
                                    }
                                        query getUserById {
                                        user(id: "4566") {
                                            name
                                            email
                                            cpf
                                        }
                                    }

Observe que na consulta acima, está descrito que precisamos apenas do nome de usuário e dos itens de bio, portanto, os itens de id e de e-mail são ignorados. Como qualquer boa linguagem de consulta, **GraphQL** permite que você especifique apenas os campos necessários para um determinado propósito, o que pode melhorar o desempenho quando temos muitos dados e precisamos apenas de uma parte dos dados. Como resultado da consulta acima, expressamos o resultado como JSON:

                                    {
                                        name: "Gabriela",
                                        email: "gabi@teste.com"
                                        cpf: "78695588334"
                                    }

# Schema e Type

Schema

Para modelagem de dados em GraphQL, use tipos. Como o nome sugere, é um tipo de dados. Este tipo pode ser definido a partir do domínio de negócios, como o tipo de usuário definido acima. O tipo é definido no lado do servidor.

Os padrões são o núcleo de qualquer implementação GraphQL. Ele descreve as funções disponíveis para os clientes conectados a ele. Gosto de pensar nisso como um contrato.
Ao especificar o padrão, um dos principais blocos usados ​​é o tipo. Este tipo fornece uma ampla gama de funções dentro do padrão, incluindo as seguintes funções:

* Criar relacionamentos entre outros types.
* Definir quais operações de busca e manipulação de dados podem ser executadas pelo cliente.
* Auto-explicar quais recursos estão disponíveis para o cliente.

exemplo: 
                     
                                            Type User {
                                                id: ID
                                                name: String
                                                email: String
                                                cpf: String
                                                nasc: String
                                                tel: String
                                            }

# Query e Mutation

Existem dois tipos de GraphQL, usados ​​especificamente para definir como consultar e manipular dados.

O type Query é usado para definir o contrato de consulta de dados. Sua função é comparável ao verbo GET da API REST. 

O type Mutation serve para definir o contrato de manipulação de dados. A funcionalidade dele é comparável com a dos verbos POST, PUT, PATCH e DELETE de APIs REST.

Os dados do servidor GraphQL são usados ​​para consultar o cliente. Assim como usar consultas para consultar dados, use mutações para criar, alterar ou excluir dados no banco de dados. De acordo com o exemplo de consulta do usuário definido acima, a mutação do usuário é a seguinte:

                                    mutation createUser(name: "Gabriela", email: "gabi@teste.com", cpf: "565656126") {
                                        id
                                        name
                                        email
                                        cpf
                                    }

                                    mutation updateUser(id: "789", ...) {
                                        id
                                        name
                                        email
                                        cpf
                                    }

                                    mutation deleteUser(id: "789") {
                                        id
                                        name
                                        email
                                        cpf
                                    }

No bloco de cada schema, define quais campos devem ser retornados após o término da operação. É uma boa prática retornar o resultado da operação, para que o cliente não precise fazer chamadas subsequentes para recapturar os dados alterados. Assim como as consultas, as mutações também são retornadas no formato JSON:

                                    {
                                        id: "789",
                                        name: "Gabriela",
                                        email: "gabi@teste.com",
                                        cpf: "565656126"
                                    }

# Alternativa a REST

A GraphQL está se tornando um forte concorrente da REST e, conforme sua comunidade cresce, ela está conquistando o mercado gradualmente.

Na API REST, os dados são organizados por meio de **caminhos diferentes**. Desta forma, se quisermos disponibilizar a matriz do usuário, execute GET / roteamento de usuário, se quisermos disponibilizar o usuário por meio de seu ID, faça outro roteamento GET / users /: ID e crie, atualize e exclua usuários, precisamos Roteie cada operação usando seu próprio método HTTP. E isso se aplica apenas a um tipo de dados.Para cada novo tipo de dados, você precisa definir a definição de rota para cada método HTTP novamente.

Além de roteamento e métodos HTTP, a arquitetura REST também tem **mais requisitos para atender aos requisitos RESTful**, como configuração de códigos de status para diferentes respostas de servidor, controle de versão, etc.

Em contraste, com GraphQL, **não há definição de rota**. Na verdade, existe apenas uma rota e **todas as solicitações são feitas por meio de consultas e mutações.** Além disso, como as mensagens de erro e sucesso são anexadas ao corpo da resposta, o GraphQL também elimina a necessidade de códigos de status. O controle de versão também é desnecessário, porque você pode adicionar novos campos e tipos sem alterar as consultas existentes.

