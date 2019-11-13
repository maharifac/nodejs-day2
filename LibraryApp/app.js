const express = require('express');
const chalk = require('chalk');
const path = require('path');

var app = new express();
                                        //app represent an object
const booksRouter=express.Router();


app.use(express.static(path.join(__dirname,"/public")));
app.use('/books',booksRouter);


app.set('views','./src/views');                                 //view is a keyword
app.set('view engine','ejs');

var nav = [
        {link:'/',title:'Home'},
        {link:'/SignUp',title:'SignUp'},
        {link:'/Login',title:'Login'},
        {link:'/Books',title:'Books'},
        {link:'/Author',title:'Author'}]

var books = [
    {
        title:"war and peace",
        genre:"hostorical fiction",
        author:"lev nicolayevich",
        image:"",
    },
    
    {
        title:"les miserable",
        genre:"historical fiction",
        author:"victor hugo",
        image:""
    },
    {
        title:"book3",
        genre:"historical fiction",
        author:"rasool",
        image:""
    },
    {
        title:"book4",
        genre:"historical fiction",
        author:"maharifa",
        image:""
    }
];
booksRouter.route('/')


.get((req,res)=>{
    res.render(
       'books',
       {
         nav,                                   //nav contains the data from var nav
         title:"Books",
         books 
       } 
    )
})
app.get('/',function(req,res)                                  // '/' means localhost or rout request
{
    // res.sendFile(__dirname+"/src/views/index.html");  
    // res.sendFile(path.join(__dirname,"/src/views/index.html")); //sending using path join
    //  res.render('index.ejs');                       //in ejs sender is used instaed of sender

     res.render('index',                                //calling each navs
     {
      nav,
     title:"Library",
     
     });

    
});
app.listen(3000,function(){
    console.log('listening to port'+chalk.green('3000'));
});               