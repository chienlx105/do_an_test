import express from "express";

import mongoose from "mongoose";
require("dotenv").config();
// connect  db mongodb
let connect = async () => {
  //
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connect success");
  } catch (error) {
    console.log(">>connect fail: ", error);
  }
};
export default connect;
