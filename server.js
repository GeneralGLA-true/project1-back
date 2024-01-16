const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log('Server request123');
    console.log(req.url)//, req.method);
    //console.log(GET)

    res.setHeader('Content-Type', 'text/plain')


    const url = req.url
    if(url === '/photos'){
       // res.write('Hello photos');
        res.end('Hello photos'); 
    } else {
        res.write('Hello world');
        res.end();
    }
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});
