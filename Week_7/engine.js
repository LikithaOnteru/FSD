const express=require('express')
const app=express()
const port=8080
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.render('index',{
        title:'User Registration',
        error:null,
        user:null
    });
});
app.post('/register',(req,res)=>{
    const{username,age,phone}=req.body;
    let errorMsg=null;
    if(!username||username.length<3){
        errorMsg='Username must be atleast 3 characters long!!';
    }else if(!age||isNaN(age)||age<18){
        errorMsg='Must be atleast 18 years old.';
    }else if(!phone||phone.length==10){
        errorMsg='Number must e 10 digits';
    }
    if(errorMsg){
        res.render('index',{
            title:'Registeration Failed!!',
            error:errorMsg,
            user:null
        });
    }else {
        res.render('index',{
            title:'Registration Successful',
            error:null,
            user:username
        });
    }
});
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});