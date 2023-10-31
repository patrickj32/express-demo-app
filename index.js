const express= require ('express');
const defaultRouter = require('./default.routes');
const studentRouter = require('./student.routes')
const studentController = require("../express-demo-app/controllers/student.controller")
const app = express();
const port = 5010


app.use ('/',defaultRouter)
app.use ('/api',studentRouter)
app.use(express.json());

app.post('/students', studentController.add);
app.put('/students/:id', studentController.update);
app.delete('/students/:id', studentController.delete);


app.listen (port, function (){
    console.log (`Example app listening on port ${port}!`)
})