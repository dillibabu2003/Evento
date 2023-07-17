//create server
let express=require("express");
let app =express();
const path= require('path');
//dotenv used to hide search the dotenv files
const dotenv=require('dotenv');
//configure the path of the dotenv file included
dotenv.config({path:'./server/config.env'})
const PORT=process.env.PORT;
//able to know the req 
const morgan=require('morgan');
console.log(PORT,"printing");
//middleware
app.use(express.json());//handles json files
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));
let {createExpenses,getExpenses,editExpense,deleteExpense}=require('./api.js');

//creates mongose connection
// let moongose=require("mongoose");
// moongose.connect("mongodb://127.0.0.1:27017/eventza").then(()=>{
//     console.log("coonnected to db ");
// });

app.get('/cse',getExpenses);
app.put('/cse',editExpense);
app.post('/cse',createExpenses);
app.patch('/cse/:id',(req,res)=>{
    console.log(req.params);
    res.send("fetchd patch");
})
app.delete('/cse',deleteExpense);
var session = require("express-session");
app.use(session({ secret: 'melody hensley is my spirit animal' }));
const passport=require('passport');


require('./auth.js');
app.use(express.json());
app.use(express.static(path.join(__dirname,'client')));
app.get('/',(req,res)=>{
    res.write('<a href="/auth/google">Google</a>');
    res.end();
})
app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));
app.get('/auth/google/failure', (req,res)=>{
    res.send("wrng")
})
app.get('/auth/google/success',isLoggedIn,(req,res)=>{
   let name=req.user.displayName();
   console.log(name);
    res.send("success");
})
function isLoggedIn(req,res,next){
    res.statusCode=302;
    res.setHeader('Location','/');
    req.user ? next():res.send("/");
}


 app.use(passport.initialize());
 app.use(passport.session());
 app.listen(5000);