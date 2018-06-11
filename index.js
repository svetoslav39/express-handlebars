const express = require('express');
const env = 'development';
const settings = require('./config/settings')[env];
const database = require('./config/database');
const server = require('./config/server');
const app = express();
const port = settings.port;
const routes = require('./config/route');

database(settings)
server(app)
routes(app)

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => console.log(`Server is runing on port: ${port}`))