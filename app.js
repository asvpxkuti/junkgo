var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const csurf =  require('csurf');
const cors = require("cors");
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database (OLD CODE)
mongoose.connect(config.database, { useNewUrlParser: true });
// On Connection
mongoose.connection.on('connected', () => {
  //mongoose.connection.db.dropDatabase();
  console.log('Connected to Database '+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});


const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const clientRouter = require('./routes/customers').customers;


const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require("express-session")({ 
    name: 'sessionID', 
    secret: "hello world", 
    cookie: {
        path: '/',
        httpOnly: false,
        secure: false,
        maxAge: 3600000
    },
    rolling: true, 
    resave: false, 
    saveUninitialized: true 
}));
app.use(cors(corsOptions));
 app.use(csurf());
app.use(function(req, res, next) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    next();
});
app.use('/customer', clientRouter);

// Port Number
const port = process.env.PORT || 5000;

// Index Routes
 app.get('/', (req, res) => {
  res.send('invaild endpoint');
}); 

app.get('*',(req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
}); 


// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});

module.exports = app;
