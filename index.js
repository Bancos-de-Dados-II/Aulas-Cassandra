const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'aula'
});

async function addPessoa(pessoa){
    //Pode ser utilizado também para a atualização
    await client.execute('INSERT INTO pessoa (id, nome, email) VALUES (?,?,?)',[pessoa.id, pessoa.nome, pessoa.email],{ prepare: true });
    console.log('Inserido');
}

async function deletarPessoa(id){
    await client.execute('DELETE FROM pessoa WHERE id = ?', [id], {prepare: true});
    console.log('Removido');
}

const pessoa = {
    id:2,
    nome: 'Maria da Silva',
    email: 'maria@gmail.com'
}

// addPessoa(pessoa);
deletarPessoa(2);