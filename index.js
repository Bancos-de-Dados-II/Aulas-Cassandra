const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'aula'
});

async function addPessoa(pessoa){
    await client.execute('INSERT INTO pessoa (id, nome, email) VALUES (?,?,?)',[pessoa.id, pessoa.nome, pessoa.email],{ prepare: true });
    console.log('Inserido');
}

const pessoa = {
    id:2,
    nome: 'Maria da Silva',
    email: 'maria@gmail.com'
}

addPessoa(pessoa);