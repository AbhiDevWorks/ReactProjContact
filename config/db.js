const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

/*Promises
const connectDB = () => {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('mongoDB Connected'))
    .catch(err => {
        console.log(err.message);
        process.exit(1);
    });
}*/

/*Async Await*/
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('mongoDB Connected');
    } catch (error) {
        console.log(err.message);
            process.exit(1);
    }
}

module.exports = connectDB;