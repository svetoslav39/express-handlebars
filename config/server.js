const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.engine('hbs', handlebars({
        extname: '.hbs',
        layoutsDir: 'views/layouts',
        defaultLayout: 'main'
    }));
    app.set('view engine', '.hbs');
    app.use('/content', express.static(path.join(__dirname, '../content')));
    app.use(bodyParser.urlencoded({extended: true}));
}