const http = require('http');
const fs = require('fs');
const PORT = 3001;

const server = http.createServer((req, res) => {
    console.log('Server request');
    console.log(req.url, req.method);
    const url = req.url;

    if(url === '/photos'){
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin' : '*'
          });
        fs.readFile("mockData.txt", function(error,data){
            if(error) {
                return console.log(error);
            }
            res.end(data);
        });
    };
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});


