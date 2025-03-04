import express from "express";
import { EmailController } from "../Controller/EmailController.js";

const Router = express.Router();

Router.post("/sendemail", EmailController);
Router.get("/test", (req, res) => {
  res.send("hello");
});

export default Router;


