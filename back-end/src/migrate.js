const { Client } = require('pg')

const config = {
    user: 'hackathon',
    database: 'hackathon',
    host: 'localhost',
    password: 'hackathon',
    port: '5433',
};

const client = new Client(config)

client.connect()

client.query('TRUNCATE _Migration', function(err, res) {
    if (err) throw err
    client.end()
})