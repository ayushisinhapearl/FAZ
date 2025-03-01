import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import Router from "./routes/user.email.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.json());

// Define test route
app.get("/test", (req, res) => res.send("hello"));

// Use email routes
app.use("/api", Router);

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});



// import express from 'express';
// import cors from 'cors';

// import dotenv from 'dotenv'
// import bodyParser from 'body-parser'
// import Router from './routes/user.email.route.js'; // Make sure this path is correct

// const app = express();
// dotenv.config();

// // Middleware
// app.use(cors({ origin: "http://localhost:5173" }));
// app.use(bodyParser.json()); 


// // Define routes
// app.get('/test', (req, res) => res.send("hello"));

// // POST route for file upload


// // Use the user email router
// app.use('/api', Router);

// // Start the server
// app.listen(8000, () => {
//   console.log('Server is running on http://localhost:8000');
// });