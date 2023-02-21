let express = require("express");
let app = express();
let portNo = 4700;
app.use((req, res, next)=> {
    res.status(404).send("<p> This is the error page</p>");
    next();
})
app.listen("4700", ()=> {
    console.log(`this is to port ${portNo}`)
})