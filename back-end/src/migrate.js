var db = require('postgresql-query');
 
db.config({
    username: 'hackathon',
    password: 'hackathon',
    host: 'localhost:5433',
    database: 'hackathon' 
});

db.query('TRUNCATE _Migration;', function (err, albums) {
    if (err) throw err
});