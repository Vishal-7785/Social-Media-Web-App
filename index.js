const express = require('express');
const app = express();
const port = 8000;
const router = require('./routes');
// Use express router
//app.use(app.router); 
const homeControlle = require('./controllers/home_controller');
app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
})