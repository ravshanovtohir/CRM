import Students from "../model/students.js";
import Group from "../model/groups.js";
import { getFullDaysEven, getFullDaysOdd } from "./davomat.js";
import mongoose from "mongoose";

// get All
export const getAllstudent = async (req, res) => {
  try {
    const students = await Students.find();
    res
      .status(200)
      .json({ message: "successfully get are students", data: students });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// get
export const getOnestudent = async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    if (!student) {
      throw new Error(`Student ${req.params.id} not found`);
    }
    res
      .status(200)
      .json({ message: "successfully get are students", data: student });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// post
export const addNewstudent = async (req, res) => {
  try {
    const student = new Students({
      name: req.body.name,
      age: req.body.age,
      category: req.body.category,
      phoneNumber: req.body.phoneNumber,
    });
    await student.save();

    res.status(200).json({ message: "successfully updatedAt", data: student });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//put
export const updatestudent = async (req, res) => {
  try {
    const { name, age, category, phoneNumber } = req.body;

    const student = await Students.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name,
          age,
          category,
          phoneNumber,
        },
      },
      { new: true, useFindAndModify: false }
    );
    if (!student) {
      res.status(500).json({
        message: "Is not a student",
        data: false,
      });
    } else {
      res.status(200).json({ message: "Successfully updated", data: student });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//delete
export const deletestudent = async (req, res) => {
  try {
    await Students.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted", data: true });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// add student to group
export const addstudents = async (req, res) => {
  try {
    const group = await Group.findById(mongoose.Types.ObjectId(req.body.id));
    if (!group) {
      res.status(404).json({ message: "Group not found", data: false });
      return;
    } else {
      const ids = await Group.findOne({
        _id: mongoose.Types.ObjectId(req.body.id),
      }).populate({
        path: "students",
        model: "Student",
        select: "_id",
      });
      const yesOrNo = ids.students.filter(
        (obj) =>
          obj._id.toString() ===
          mongoose.Types.ObjectId(req.params.id).toString()
      );
      if (yesOrNo.length >= 1) {
        console.log(yesOrNo);
        res
          .status(300)
          .json({ message: "Bu student oldin qo'shilgan", data: false });
        return;
      } else {
        //studentni guruhga qo'shish
        group.students.push(req.params.id);
        await group.save();
      }
      res
        .status(200)
        .json({ messages: "Successfully added students", data: group });
    }
    // studentga guruhning davomat uchun kunlarini qo'shish
    const student = await Students.findById(req.params.id);
    if (student) {
      student.group = group._id;
      await student.save();
      student.group = group._id;
      await student.save();
    }
  } catch (error) {
    res.status(401).json({ messages: error.message, data: false });
  }
};

// export const davomat = async (req, res) => {
//   try {
//     const { date, chek, day } = req.body;
//     await Students.updateOne(
//       { _id: req.params.id },
//       { $addToSet: { days: { [date]: chek } } }
//     );
//     res.json({ messages: "Successfully updated" });
//   } catch (error) {
//     res.status(401).json({ messages: error.message });
//   }
// };

export const davomat = async (req, res) => {
  try {
    const { date, chek } = req.body;
    await Students.updateOne(
      { _id: req.params.id },
      { $addToSet: { days: { [date]: chek } } },
      (error, result) => {
        if (error) {
          res.status(401).json({ messages: "Not Found" });
          return;
        }
        res.status(200).json({ messages: `Student ${date} sanada kelgan` });
      }
    ).clone();
  } catch (error) {
    res.status(401).json({ messages: error.message });
  }
};
