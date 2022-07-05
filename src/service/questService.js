import Quest from "../model/tracNghiemModel";

// add quest
let addQuest = (qst) => {
  return new Promise(async (resolve, reject) => {
    try {
      await Quest.insertMany(qst);

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

// get list Quest
let getListQuest = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let quests = await Quest.find();
      if (quests) {
        resolve(quests);
      }
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

module.exports = {
  addQuest: addQuest,
  getListQuest: getListQuest,
};
