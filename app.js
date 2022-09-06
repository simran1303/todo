const router = require('./routers/router');
const express = require('express');
const app =  express();

const sequelize = require('./util/database')

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use(router);

sequelize.sync().then( re =>{
    console.log('sync done');
    app.listen(5000,()=>{
        console.log('listen at 5000 port');
    })
})
.catch(err => console.log(err))


