var express = require('express');
const cors = require('cors');
const path = require('path')

var app = express();

//Init Middleware
//https://stackoverflow.com/questions/59997685/postman-can-not-read-request-body
app.use(express.json({ extended: false }));

//for cors
app.use(cors({
   origin: '*',
   methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

//http://localhost:/5200/api/dac
app.use('/api/dac', require('./routes/api/dac'));

app.get('/', (req, res) => res.send('API SERVICE IS RUNNING!!'));

const PORT = process.env.PORT || 5200;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));