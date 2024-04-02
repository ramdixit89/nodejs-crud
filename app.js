import express from 'express';
import bodyParser from 'body-parser';
import connectDB from "./db/connectdb.js"
import dotenv from 'dotenv';
import { join } from 'path';
//import routes
import web from './routes/web.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || '4000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://0.0.0.0:27017"
//database connection
connectDB(DATABASE_URL);  

// Parse URL-encoded bodies middleware
app.use(bodyParser.urlencoded({ extended: true }));

//Static files
app.use('/student', express.static(join(process.cwd(), "public"))) //Public folder wali chije enable hogi

//set template engine
app.set( 'view engine', 'ejs' ); 

//load routes
app.use("/", web)

app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.BASE_URL}`);
})