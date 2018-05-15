const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Hello Express 2!');
    // res.send({name: "Adam"});
});

app.get('/users', function(req, res){
    // res.send('Hello Express!');
    res.send([{name: "Adam"}, {name: "Salem"}]);
});

const server = app.listen(3000, function(){
    console.log('Server running at http://localhost:3000/');
    
})