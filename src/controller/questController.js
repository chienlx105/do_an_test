import { json } from "body-parser";
import Quest from "../model/tracNghiemModel";
import questService from "../service/questService";

//get list quests

let getAllQuest = async (req, res) => {
  try {
    let data = await questService.getListQuest();
    if (data && data.length > 0) {
      return res.status(200).json({
        message: "get list quests",
        Quest: data,
      });
    } else {
      return res.status(400).json({
        message: "No list",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "error get list",
    });
  }
};

// add quest
let getQuestPage = (req, res) => {
  return res.render("questAdd.ejs");
};

//[post]
let addQuest = async (req, res) => {
  let dataQuest = req.body;

  try {
    let check = await questService.addQuest(dataQuest);
    if (check) {
      return res.status(200).json({
        message: "add quest succes",
      });
    } else {
      return res.status(300).json({
        message: "no add",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "failed to add quest",
    });
  }
};

module.exports = {
  getAllQuest: getAllQuest,
  getQuestPage: getQuestPage,
  addQuest: addQuest,
};
