
module.exports = function(app){
    app.get('/produtos',function(req,res){
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host : 'localhost',
            port: '3306',
            user : 'root',
            password : 'Serial',
            database : 'casadocodigo_nodejs'
        });

        connection.query('select * from livros', function(err,results){
            res.render('/produtos/lista',{lista:results});
        });

        connection.end();
    });
}