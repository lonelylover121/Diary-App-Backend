require('dotenv').config();
var express = require('express');
var bodyParser=require('body-parser');
const dbConnection = require('./dbconnection.js');
const userRoutes= require('./routes/users.js');

const app = express();
const PORT = process.env.PORT || 3000
dbConnection();
app.get('/',userRoutes )
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
