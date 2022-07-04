import express from "express";
import { getHome } from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getHome);

  app.use("/", router);
};

export default initWebRoute;
