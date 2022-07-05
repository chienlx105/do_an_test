import express from "express";
import {
  getAllUser,
  getUserById,
  getPageAdd,
  getAddUser,
} from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/get/alluser", getAllUser);
  router.get("/get/user/:uid", getUserById);

  //add user
  router.get("/post/add-user", getPageAdd);
  router.post("/post/addNewUser", getAddUser);
  app.use("/", router);
};

export default initWebRoute;
