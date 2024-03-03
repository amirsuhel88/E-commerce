const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

//config for config.env
dotenv.config({path:"backend/config/config.env"})

//connection to database
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})