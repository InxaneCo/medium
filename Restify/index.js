require('dotenv').config()

const restify = require('restify');
const server = restify.createServer();

server.get('/',
    function (req, res, next) {
        console.log('I am function first');
        return next();

    }, function (req, res ,next) {
        console.log(' I am function second ');
        res.send('Response by function 2');
        return next();
    }
);


server.listen(process.env.PORT || process.env.port, function () {
    console.log('Server is running %s , $s ', server.url, server.name);

});
