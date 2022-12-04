const express = require('express');
const app = express();
const morgan = require('morgan');
require('./database');

// MIDDLEWARES
app.use(morgan('dev'))

// VARIABLES
app.set('port', 800)

app.listen(app.get('port'), () => {
    console.log(`Server listen ${app.get('port')} `);
})