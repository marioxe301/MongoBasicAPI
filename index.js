require('dotenv/config');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoute = require('./src/routes/users');


//settings
app.set('port',process.env.PORT || 3030);

//middlewares
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/user',userRoute);

//init server
app.get('/',(req,res)=>
    res.send('User API')
);

app.listen(app.get('port'),()=>{
    console.log(`Server running in port ${app.get('port')}`);
})