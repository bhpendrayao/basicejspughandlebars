const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const users =[];

app.use(bodyParser.urlencoded({ extended: false }));
app.engine('hbs',engine({defaultLayout:'main-layout', extname: 'hbs'}));
app.set('view engine', 'ejs');
app.set('views','views');

app.get('/',(req, res, next)=>{
    res.render('index',{pageTitle: 'Add User'});
});

app.get('/users',(req,res,next)=>{
     res.render('user',{pageTitle:'User', users: users, hasusers: users.length>0});
});

app.post('/add-user',(req,res,next)=>{
    users.push({name:req.body.username});
    res.redirect('/users');
});

app.listen(3000);