import User from "../model/userModel";
import userService from "../service/userService";

//controller
let getAllUser = async (req, res) => {
  try {
    let data = await userService.getAll();
    if (data && data.length > 0) {
      return res.status(200).json({
        message: "oke",
        data: data,
      });
    } else {
      return res.status(300).json({
        message: " no data",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "error",
    });
  }
};

//find id
let getUserById = async (req, res) => {
  let uid = req.params.uid;

  try {
    let user = await userService.findUserById(uid);
    if (user && user.length > 0) {
      return res.status(200).json({
        message: "find user by id",
        data: user,
      });
    } else {
      return res.status(300).json({
        message: "ko co user co id nay",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "error get user by id",
    });
  }
};
//add user
let getPageAdd = (req, res) => {
  return res.render("createUser.ejs");
};
let getAddUser = async (req, res) => {
  let user = req.body;

  try {
    let check = await userService.createNewUser(user);
    if (check) {
      return res.status(200).json({
        success: true,
        message: "create succes",
      });
    } else {
      return res.status(300).json({
        message: "create fail",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "error",
    });
  }
  return res.send("data 1");
};
export { getAllUser, getUserById, getPageAdd, getAddUser };
