import { ObjectId } from "mongodb";
import Staff from "../model/staff.js";
import sha256 from "sha256";

// get All
export const getAllstaff = async (req, res) => {
  try {

    let staff = await Staff.find();


    staff = Object(staff)

    delete staff.password
    delete staff.is_ceo
    delete staff.is_admin

    res
      .status(200)
      .json({ message: "successfully get are staff", data: staff });

  }
  catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// get
export const getOnestaff = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    res
      .status(200)
      .json({ message: "successfully get are staff", data: staff });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// post
export const addNewstaff = async (req, res) => {
  try {

    const { name, rol, password, phoneNumber, gender, date_birth, img, description } = req.body


    const staff = new Staff({
      name,
      rol: ObjectId(rol),
      password: sha256(password),
      phoneNumber,
      gender: "male",
      date_birth: new Date(),
      img,
      description
    });

    await staff.save();
    res.status(200).json({ message: "successfully updated", data: staff });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//put
export const updatestaff = async (req, res) => {
  try {
    const { name, rol, password, phoneNumber } = req.body;

    const staff = await Staff.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name,
          rol,
          password,
          phoneNumber,
        },
      },
      { new: true, useFindAndModify: false }
    );
    if (!staff) {
      res.status(500).json({
        message: "Is not a staff",
        data: false,
      });
    } else {
      res.status(200).json({ message: "Successfully updated", data: staff });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//delete
export const deletestaff = async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};