// const customExpress = require('./config/custom-express')
const { GraphQLServer } = require('graphql-yoga')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')
const Operacoes = require('./infraestrutura/operations')

// const app = customExpress()

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
    status: () => 'Servidor rodando' // ele nao aceita uma string sozinha, tem que passar um obj ou função / call back
  },
  Mutation: {
    adicionarCliente: (root, params) => Clientes.adiciona(params),
  }
}
const servidor = new GraphQLServer({
  //* o Graph é tipado, então ele espera os tipos, e o resolver
  resolvers,
  typeDefs: './schema.graphql'
  
}) // criado o servidor

servidor.start(() => console.log('servidor ouvindo....')) // iniciar o servidor

// app.listen(4000, () => {
//   console.log('Servidor rodando na porta 4000')
// })
