var pg = require('pg');
 
let config = {
    user: 'hackathon',
    password: 'hackathon',
    host: 'localhost',
    port: '5433',
    database: 'hackathon'
};

var pool = new pg.Pool(config);

pool.query('TRUNCATE _Migration', function(err, res) {
    if (err) throw err
    console.log(res.rows)
})