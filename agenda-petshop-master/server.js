const { GraphQLServer } = require('graphql-yoga')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')
const Operacoes = require('./infraestrutura/operations')


//* faz a conexão ao bd
conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }

  console.log('conectou no banco')

  Tabelas.init(conexao)
})

const Clientes = new Operacoes('cliente')

const resolvers = {
  Query: {
    status: () => "Servidor rodando!",
    clientes: () => Clientes.lista(),
    cliente: ({ id }) => Clientes.buscaPorId(id),
    pets: () => Pets.lista(),
    pet: ({ id }) => Pets.buscaPorId(id)
},
  Mutation: {
    adicionarCliente: (params) => Clientes.adiciona(params),
    atualizarCliente: (params) => Clientes.atualiza(params),
    deletarCliente: ({ id }) => Clientes.deleta(id),
    adicionarPet: (params) => Pets.adiciona(params),
    atualizarPet: (params) => Pets.atualiza(params),
    deletarPet: ({ id }) => Pets.deleta(id)
  }
}
const servidor = new GraphQLServer({
  //* o Graph é tipado, então ele espera os tipos, e o resolver
  resolvers,
  typeDefs: './schema.graphql'
  
}) // cria o servidor

servidor.start(() => console.log('servidor ouvindo....')) // iniciar o servidor


