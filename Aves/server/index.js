const express = require('express');
const morgan = require('morgan');
const app = express();
const {mongoose} = require('./database');

//iniciar servidor
app.listen(3000, ()=>{
    console.log('server on port 3000');
});

//middleware
app.use(morgan('dev'));
app.use(express.json());

//routers
app.use('/api/aves' , require('./routers/aves.routes')); 