'use strict'


const mongoose = require('mongoose');
const app = require('./app')
const port = 3900;

/*CONEXIÖN MONGODB A NODE*/
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/yayos', {useNewUrlParser: true})
        .then(() => {
            console.log('La conexión a la base de datos correcta');

            /*SERVER*/
            app.listen(port, () => {
                console.log("servidor creado en puerto " + port)
            })
        });

