// var app = require ('./config/express')();
// var rotasproduto = require('.app/routes/produtos')(app);
// app.listen(3000,function(){
//     console.log("servidor rodando")
// });
// var express = require('./config/express')();
// var app = configura();

// app.set('view engine','ejs'); 
// app.get('/produtos',function(req,res)
// {
//     res.render("produtos/lista")
// })

// app.listen(3000, function(){
//     console.log("servidoo 100%");
// })

var app = require('./config/express')();

// var rotasProdutos = require('./app/routes/produtos')(app);


app.listen(3000, function(){
    console.log("Servidor rodando");
});
