const mongoose = require('mongoose');
const config = require('config')  //installed from npm

const db = config.get('mongoURI') //get's value from our default.json file

const connectDB = async () => {
  try {
    await mongoose.connect(db,{
     useNewUrlParser: true,
    });
    console.log("MongoDB Connected...")
  } catch (err) {
    console.error(err.message);
    process.exit(1);  //exit process with failure
  }
}

module.exports = connectDB;