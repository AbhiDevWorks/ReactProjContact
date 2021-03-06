//common js format
const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

//Endpoint- without this postman would give a 404 error
//app.get('/',(req,res) => res.send('Hello World'))
app.get('/',(req,res) => res.json({msg: 'Welcome to the ContactKeeper API...'}))

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacs', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));