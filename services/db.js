const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

const URI = process.env.DB_URL
const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    promiseLibrary: global.Promise,
    keepAlive: 1, 
    connectTimeoutMS: 30000,
    // server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    // replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

const connectDB = async () => {
    await mongoose.connect(URI,
        options,
    );
    console.log('db connected ........')
}

module.exports = connectDB