// 'user strict';

// const express=require('express');
// const MongoClient=require('mongodb').MongoClient;
// const bodyParser=require('body-parser');
// const db=require('./config/db');

// const app=express();
// const port=process.env.PORT||8080;

// app.use(bodyParser.urlencoded({
//     extended:true
// }));

// MongoClient.connect(db.url,(err,database)=>{
//     if(err) return console.log(err);

//     require('./app/routes')(app,database);
    
//     app.listen(port,()=>{
//         console.log('Server live on port '+port);
//     });
// });

const express=require('express');
const app=express();
const port=process.env.PORT || 8080;
const mongoose=require('mongoose');
//Models---
const Emp=require('./app/models/empModel');
const Project=require('./app/models/projectModel');

const bodyParser=require('body-parser');
mongoose.Promise=global.Promise;

mongoose.connect('mongodb://test:test@ds235840.mlab.com:35840/sample_dev');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes=require('./app/routes/skill_routes');
routes(app);

app.listen(port);

console.log('Server live on port '+port);