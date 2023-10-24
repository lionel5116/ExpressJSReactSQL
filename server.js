var express = require('express');
const cors = require('cors');
const path = require('path');
var bodyParser = require('body-parser');
const router = require('./routes/api/dac');
const connectDB = require('./config/db')

const stripe = require('stripe')('sk_test_51LvL8IKWeLMKqrB6Q1XBBoiZXAFGJKVsCecBUSRAnotd41kwxGmOIOVCq61rFCTfcswDNbS1VjB4khpOUmJh2hPH00EdAXqESn')

var app = express();

//Connect to MongoDB Database
connectDB();


//https://stackoverflow.com/questions/59997685/postman-can-not-read-request-body
//app.use(express.json({ extended: false }));

//coffee price id
//price_1O4pH1KWeLMKqrB6RqvSw2RC

//sunglasses price id
//price_1O4pKcKWeLMKqrB6t6EsNZr5

//camera price id
//price_1O4pLuKWeLMKqrB6RQLBbdo4

//for stripe
app.use(express.static("public"));


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

//routes for mongoDB
//http://localhost:/5200/api/eccSchool
app.use('/api/eccSchool', require('./routes/api/eccSchool'));


app.get('/', (req, res) => res.send('API SERVICE IS RUNNING!!'));

//FOR STRIPE
//http://localhost:5200/checkout
app.post("/checkout",async (req,res) => {
    const items = req.body.items;
    let lineItems = [];
    items.forEach(item => {
       lineItems.push (
         {
            price: item.id,
            quantity: item.quantity
         }
       )
    });


    //<Route path="/Success" element={<Success />}></Route>
    const session = await stripe.checkout.sessions.create( {
       line_items: lineItems,
       mode: 'payment',
       success_url: "http://localhost:3000/Success",
       cancel_url: "http://localhost:3000/Cancel",
    });

    res.send(JSON.stringify( {
       url: session.url
    }));
})

const PORT = process.env.PORT || 5200;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));