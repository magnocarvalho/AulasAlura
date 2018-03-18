var express = require('express');
var load = require('express-load');

module.exports = function() {

    var app = express();


    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
};
// var app = require('express')();
// app.set('view engine', 'ejs');
// app.set('views', './app/views');
// module.exports = function() {
//     return app;
// };