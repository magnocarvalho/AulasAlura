// var dbConnection = require('../infra/dbConnection');
// module.exports = function(app){
//   app.get('/produtos',function(req,res){

//       var connection = dbConnection();

//       connection.query('select * from produtos',function(err,results){
//           res.send('produtos/lista', {lista:results});
//       });

//       connection.end();

//   });
// }


module.exports = function(app) {
    app.get("/produtos",function(req, res) {

        var connection = app.infra.connectionFactory();

        connection.query('select * from produtos', function(err, results){
            res.render('produtos/lista', {lista: results});
        });

        connection.end();

    });
}