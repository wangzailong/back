import express from 'express';
import bodyParser from 'body-parser';
import config from 'config';

import router from './routers/index.js';
import db from './mongodb/db.js';
const  app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(morgan("dev")); 日志
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

router(app);

// process.on('uncaughtException', function(err) {
//     console.log(err);
// });

app.listen(3000,()=>{
    console.log('Running...')
})