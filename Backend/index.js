'use strict'

require('dotenv').config({path: '../src/var.env'});

const mongoose = require('mongoose');
const app = require('./app')
//const port = 3900;
//const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3900;
/*CONEXIÖN MONGODB A NODE*/

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
        .then(() => {
            console.log('La conexión a la base de datos correcta');

            app.listen(port, () => {
                console.log("servidor creado en puerto " + port)
            })
        });
/*mongoose.connect('mongodb+srv://AdminOfYayos:AdminOfYayos@cluster0.8s4kw.mongodb.net/yayos?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(() => {
        console.log('La conexión a la base de datos correcta');

        app.listen(port, () => {
            console.log("servidor creado en puerto " + process.env.PORT)
        })
    });*/

