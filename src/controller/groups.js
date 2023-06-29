import mongoose from "mongoose";
import Group from "../model/groups.js";
import { getFullDaysEven, getFullDaysOdd } from "./davomat.js";

export const getAllgroup = async (req, res) => {
  try {
    const group = await Group.find();
    res
      .status(200)
      .json({ message: "successfully get are group", data: group });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// get by Id
export const getOnegroup = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    res
      .status(200)
      .json({ message: "successfully get are group", data: group });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// post
export const addNewgroup = async (req, res) => {
  try {
    const group = new Group({
      gropName: req.body.gropName,
      teacher: req.body.teacher,
      room: req.body.room,
      category: req.body.category,
      day: req.body.day,
      startTime: req.body.startTime,
      startGroup: req.body.startGroup,
      endGroup: req.body.endGroup,
    });

    if (group.day === "toq") {
      group.date = getFullDaysOdd(group.startGroup, group.endGroup);
    } else {
      group.date = getFullDaysEven(group.startGroup, group.endGroup);
    }
    await group.save();
    res.status(200).json({ message: "successfully updatedAt", data: group });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//put
export const updategroup = async (req, res) => {
  try {
    const group = await Group.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          gropName: req.body.gropName,
          teacher: req.body.teacher,
          room: req.body.room,
          category: req.body.category,
          day: req.body.day,
          startTime: req.body.startTime,
          startGroup: req.body.startGroup,
          endGroup: req.body.endGroup,
        },
      },
      { new: true, useFindAndModify: false }
    );
    if (!group) {
      res.status(500).json({
        message: "Is not a group",
        data: false,
      });
    } else {
      res.status(200).json({ message: "Successfully updated", data: group });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//delete
export const deletegroup = async (req, res) => {
  try {
    await Group.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted", data: true });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

export const deleteStudent = async (req, res) => {
  await Group.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(req.body.gropId) },
    { $unset: { students: { _id: req.params.id } } },
    { new: true }
  )
    .then((templates) =>
      res
        .status(200)
        .json({ message: "Successfully deleted student", data: templates })
    )
    .catch((err) =>
      res.status(500).json({ message: err.message, data: false })
    );
};

export const getStudentFromGroup = async (req, res) => {
  await Group.find()
    .populate({
      path: "students",
      model: "Student",
      select: ["name", "age", "phoneNumber", "days"],
    })
    .exec((err, data) => {
      if (err) {
        res.status(500).send({ message: "Failed!" });
        return;
      }
      res.status(200).json({ data: data });
    });
};
