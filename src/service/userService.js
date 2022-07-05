import User from "../model/userModel";

let getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await User.find();
      if (users) {
        resolve(users);
      }
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

let findUserById = (uid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await User.find({ _id: uid });
      if (user) {
        resolve(user);
      }
    } catch (error) {
      reject(error);
    }
  });
};
let createNewUser = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      await User.insertMany(user);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  getAll: getAll,
  findUserById: findUserById,
  createNewUser: createNewUser,
};
