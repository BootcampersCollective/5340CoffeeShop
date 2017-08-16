const express = require('express'),
      bodyParser = require('body-parser'),
      fileServer = express.static('public'),
      fs = require('fs'),
      mongoose = require('mongoose'),
      morgan = require ('morgan'),
      routes = require('./controllers/routes');

let app = express();

let PORT = process.env.port || 3000;

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
