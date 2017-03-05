var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('./'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(require('method-override')());

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);


let heroes = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' },
    { id: 4, name: 'Tornado' }
];

app.get('/heroes', (req, res) => {
    res.set({ 'Content-Type': 'application/json' });

    res.json({ data: heroes });
});

app.post('/heroes', (req, res) => {
    res.set({ 'Content-Type': 'application/json' });

    let hero = req.body;
    let ids = heroes.map(_hero => _hero.id);
    hero.id = Math.max.apply(null, ids) + 1;

    heroes.push(hero);

    res.json({ data: hero });
});

http.createServer(app)
    .listen(3030, function () {
        console.log('Servidor executando na porta: ' + 3030);
    });