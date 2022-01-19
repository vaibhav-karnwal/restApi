const express = require("express");
// const req = require("express/lib/request");
// require("./db/conn");
// const User = require("./models/users")
const app = express();
const authRoute = require('./routes/auth')

const port = process.env.PORT || 3000;

app.use('/api/user',authRoute);

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})