const express = require('express');
const app = express();
var sockets = require('./sockets');
var config = require('getconfig')
const PORT = process.env.PORT || 8888;
const IP = process.env.IP || '0.0.0.0';
var knex = require('knex');
var connect = knex({
    client: 'postgresql',
    connection: {
        user : 'vagrant',
        password : '0000',
        database : 'chatting'
    },
    migrations: {
        tableName: 'knex_migrations'
    }
})


app.use(express.static(__dirname+"/public"));

app.post('/login', (req, res) => {

})

var server = app.listen(PORT, IP, function(){
    console.log(`app listening on port ${PORT}!`);
});

sockets(server, config)