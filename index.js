const express= require ('express');
const defaultRouter = require('./default.routes');
const studentRouter = require('./student.routes')
const app = express();
const port = 5000


app.use ('/',defaultRouter)
app.use ('/api',studentRouter)


app.listen (port, function (){
    console.log (`Example app listening on port ${port}!`)
})