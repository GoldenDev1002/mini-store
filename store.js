let express = require("express");
let app = express();
let portNo = process.env.PORT || 4700;
let bodyParser = require("body-parser");
require("dotenv").config() //access the environment variables
require("express-async-errors"); // catch errors at runtime without using try/catch blocks in your async functions.
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.urlencoded({extended: true}));
let productRouter = require("./routes/route.js");


app.get("/here", (req, res)=> {
    res.send("<a href= '/api/v1/products'>Click Here</a>")
})

app.use((req, res, next)=> {
    res.status(404).send("<p> This is the error page</p>");
    
})

app.use("/api/v1/products", productRouter);

let start = async()=> {
try{
    app.listen(portNo, ()=> {
        console.log(`this is to port ${portNo}`)
    })
}catch(err){
console.log(err)
}

}
start()