const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
require('dotenv').config();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

//Static
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/players', require('./routes/api/players'));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

const port = 3001;

const server = app.listen(port, ()=> console.log('Listening on ' + port));
