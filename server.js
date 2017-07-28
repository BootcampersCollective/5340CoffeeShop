var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    morgan = require ('morgan'),
    routes = require('./controllers/routes'),
    fileServer = express.static('public'),
    fs = require('fs');


var app = express();

var PORT = process.env.port || 3000;

// include static routes for serving up static html files.
app.use(fileServer);


// setup the logger
app.use(morgan('dev'));

// make our database connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/5340CoffeeShop', function(errorTime){
    errorTime ?
        console.log('NO CONNECTION TO DB')
        :    console.log('SQUAWK');
});

app.get('*', function (req, res) {
    res.sendFile(fileServer + '/index.html');
});

// call our routes
routes(app);

app.listen(PORT, function(err){
    if(err) {
        console.log("Server Error: ",err);
        process.exit(1);
    } else {
        console.log("Server is up on port " + PORT);
    }
});
