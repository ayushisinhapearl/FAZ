import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import Router from "./routes/user.email.route.js";
import cookieParser from "cookie-parser"


dotenv.config();

//Import Statements
import { connectDB } from "./db.connect/db.connect.js"
import {errorHandler} from "./middleware/ErrorHandler/globalErrorHandler.js"
import UserRoute from "./routes/user.routes.js"
import morgan from "morgan";



const app = express();
app.use(morgan('dev'));
// Middleware
app.use(cors({ 
  origin: "http://localhost:5173",
  credentials: true,  
}));


app.use(bodyParser.json());
app.use(cookieParser());

app.use(errorHandler); //globalErrorHandler

//Server Setup
const port =  process.env.PORT|| 5000

// app.get("/",(req,res)=>{
//   return res.send("hello")
// })
app.use("/api" ,UserRoute)


  app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}/ on port ${port}`);
       connectDB();  // Ensure DB connection is established
  });

// Define test route
app.get("/test", (req, res) => res.send("hello"));

// Use email routes
app.use("/api", Router);

// app.listen(8000, () => {
//   console.log("Server is running on http://localhost:8000");
// });

