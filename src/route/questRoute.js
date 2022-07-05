import express from "express";
import questController from "../controller/questController";

let router = express.Router();

const initQuestRouter = (app) => {
  router.get("/getlist", questController.getAllQuest);
  router.get("/add-quest", questController.getQuestPage);
  router.post("/post-quest", questController.addQuest);
  app.use("/quest", router);
};

export default initQuestRouter;
