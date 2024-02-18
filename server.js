/* const http = require('http');
const fs = require('fs');
const PORT = 3001;

const server = http.createServer((req, res) => {
    console.log('Server request');
    console.log(req.url, req.method);
    const url = req.url;
    const method = req.method;

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
    if(url === '/new_photo' && method === 'POST'){
        console.log('прийшов ПОСТ!')
    }
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
}); */

const express = require('express');
const app = express();
const fs = require('fs');
const port = 3002;


app.get('/photos', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');

    fs.readFile('mockData.txt', (error, data) => {
        if (error) {
            console.log(error);
            res.status(500).send('Помилка сервера');
            return;
        }
        res.send(data);
    });
});


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    next();
});

app.post('/new_photo', (req, res) => {
    const postData = req.body;
   
    fs.writeFile('newData.txt', JSON.stringify(postData), function (err) {
        if (err) throw err;
        console.log('Створено новий файл');
      });
    console.log('Отримані дані:', postData);
    res.send(JSON.stringify('POST-запит отримано успішно'));
});






app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});


