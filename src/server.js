import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
import cors from "cors";
import connect from "./config/connectMongo";
import bp from "body-parser";

import initQuestRouter from "./route/questRoute";

require("dotenv").config();

const app = express();

connect();
app.use(cors({ origin: true }));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

//init router
initWebRoute(app);
initQuestRouter(app);

configViewEngine(app);
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening to host http://localhost:${port}/`);
});
