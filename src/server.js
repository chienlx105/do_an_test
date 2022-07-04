import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
import connection from "./config/connectDB";
require("dotenv").config();

const app = express();

initWebRoute(app);
configViewEngine(app);
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening to host http://localhost:${port}/`);
});
