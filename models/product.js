const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productschema = new Schema({
    p_id:{ type: String},
    title:{ type: String },
    price:{ type: Number }
});

module.exports = mongoose.model('Product',productschema);


