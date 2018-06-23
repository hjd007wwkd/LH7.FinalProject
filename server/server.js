const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
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

app.listen(PORT, function(){
    console.log(`app listening on port ${PORT}!`);
});