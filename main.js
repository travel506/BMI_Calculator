const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res)
{
res.send("/index.html");
});

app.post("/",function(req,res){
// console.log(req.body);
let n1=Number(req.body.n1);
let n2=Number(req.body.n2);
// n2=n2*100;
let bmi=(n1/(n2*n2));
bm=Math.round(bmi);
console.log(bmi);
if(bmi<18.5)
{
    res.send("Your BMI is : "+JSON.stringify(bmi)+" You are Underweight :(");
}
else if(bmi>=18.5 && bmi<=24.5)
{
    res.send("Your BMI is : "+JSON.stringify(bmi)+" You are Normal weight :)");
}
else if(bmi>=25.0 && bmi<=29.9)
{
    res.send("Your BMI is : "+JSON.stringify(bmi)+" You are Overweight !");
}
else if(bmi>=30.0 && bmi<=34.9){
    res.send("Your BMI is : "+JSON.stringify(bmi)+" You are Obese - Class I !");
}
else{
    res.send("Your BMI is : "+JSON.stringify(bmi)+" You are Obese - Class II !");
}
});

app.listen(3000,(req,res)=>{
console.log("server running");
});