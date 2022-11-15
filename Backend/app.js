const express = require('express')
const app = new express();
const path = require('path');
app.use(express.static('./dist/Frontend'));
    app.get('/*', function (req, res) {
 res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



app.use(express.urlencoded({extended:true}));
app.use(express.json());
const cors = require('cors')
require('./middleware/mongodb')
app.use(cors())
const logger=require('morgan')
app.use(logger('dev'))
const api = require('./routes/api')
app.use('/api',api)


app.listen(3000,()=>{
    console.log("Server is listening to port 3000")
})
    
