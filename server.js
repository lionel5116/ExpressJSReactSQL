var express = require('express');
const cors = require('cors');
const path = require('path');
var bodyParser = require('body-parser');
const router = require('./routes/api/dac');

var app = express();


//https://stackoverflow.com/questions/59997685/postman-can-not-read-request-body
//app.use(express.json({ extended: false }));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//for cors
app.use(cors({
   origin: '*',
   methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

//Init Middleware - this is if we wanted to perform some sort of authentication before any other operation takes place
/*
router.use((request,response,next)=> {
   next();
})
*/

//http://localhost:/5200/api/dac
app.use('/api/dac', require('./routes/api/dac'));

app.get('/', (req, res) => res.send('API SERVICE IS RUNNING!!'));

const PORT = process.env.PORT || 5200;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));