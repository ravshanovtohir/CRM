import { ObjectId } from "mongodb";
import Staff from "../model/staff.js";
import sha256 from "sha256";
import fs from "fs"
import path from "path"
import { log } from "console";

// get All
export const getAllstaff = async (req, res) => {
  try {

    let staffs = await Staff.find();

    staffs = staffs.map(el => {
      el = el.toObject()
      delete el.password
      delete el.is_ceo
      delete el.is_admin
      return el
    })

    res
      .status(200)
      .json({ message: "successfully get all staffs", data: staffs });

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


    let staff = await Staff.findById(req.params.id);

    staff = staff.toObject()

    delete staff.password
    delete staff.is_ceo
    delete staff.is_admin


    res
      .status(200)
      .json({ message: "successfully get staff by ID", data: staff });

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

    const { name, password, phoneNumber, gender, date_birth, img, description } = req.body

    let fileName;


    const regexPhoneNumber = /^998[389][012345789][0-9]{7}$/
    const regexPassword = /(?=.*[!#$%&?^*@~() "])(?=.{8,})/
    const regexDataBirth = /^([1-9]|0[1-9]|[12][0-9]|3[0-1])\/([1-9]|0[1-9]|1[0-2])\/\d{4}$/


    if (!name) {
      return res.status(403).json({
        message: "Name is required",
        data: false
      })
    }

    if (name.length > 25 || name.length <= 5) {

      return res.status(403).json({
        message: "Invalid length for staff name. Length of staff name must be more then 5 and less then 25",
        data: false
      })

    }

    if (!password) {
      return res.status(403).json({
        message: "Password is required",
        data: false
      })
    }

    let a = regexPassword.test(password)

    if (!a) {
      return res.status(403).json({
        message: `Invalid password eight char or longer and must have a special character`,
        data: false
      })
    }

    if (!phoneNumber) {
      return res.status(403).json({
        message: "Phone number is required",
        data: false
      })
    }

    let b = regexPhoneNumber.test(phoneNumber)
    if (!b) {
      return res.status(403).json({
        message: `Invalid phone number`,
        data: false
      })
    }

    if (!gender) {
      return res.status(403).json({
        message: "gender is required",
        data: false
      })
    }


    if (!(gender == "male" || gender == "female")) {
      return res.status(403).json({
        message: `Invalid gender. must be male or female`,
        data: false
      })
    }


    if (!date_birth) {
      return res.status(403).json({
        message: "data birth is required",
        data: false
      })
    }

    // let date = regexDataBirth.test(date_birth)
    if (!new Date(date_birth)) {
      return res.status(403).json({
        message: `Invalid date birth. must be YYYY.MM.DD`,
        data: false
      })
    }





    if (req?.files?.file) {

      const { file } = req.files
      const { size, mimetype, data, name } = file

      if (size > (10 * 1024 * 1024)) {
        return res.status(413).json({
          message: 'The file larger than 10MB!',
          data: false
        })
      }
      if (!['image/png', 'image/jpeg', 'image/jpg'].includes(mimetype)) {
        return next(
          new error.ValidationError(415, "The file must be jpg ,jpeg or png!")
        )
      }

      fileName = Date.now() + name.replace(/\s/g, '')
      const pathName = path.join(process.cwd(), 'uploads', fileName)
      fs.writeFileSync(pathName, data)

    }

    fileName = fileName ? fileName : "avatarka.png"

    let staff = new Staff({
      name,
      password: sha256(password),
      phoneNumber,
      gender: "male",
      date_birth: new Date(date_birth).toISOString().slice(0, 10),
      img: fileName,
      description
    });

    await staff.save();

    staff = staff.toObject()

    delete staff.password
    delete staff.is_ceo
    delete staff.is_admin



    return res
      .status(200)
      .json({
        status: 200,
        message: 'successfully added new staff!',
        data: staff
      })
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
    const { name, rol, password, phoneNumber, gender, date_birth, img, description } = req.body;

    console.log();

    let staff = await Staff.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name,
          rol,
          password: sha256(password),
          phoneNumber,
          gender,
          date_birth: new Date(date_birth).toISOString().slice(0, 10),
          img,
          description,
          updatedAt: new Date()
        },
      },
      { new: true, useFindAndModify: false }
    );

    if (!staff) {
      return res.status(500).json({
        message: "Is not a staff",
        data: false,
      });
    }

    staff = staff.toObject()

    delete staff.password
    delete staff.is_ceo
    delete staff.is_admin


    return res
      .status(200)
      .json({
        status: 200,
        message: 'Staff successfully updated!',
        data: staff
      })

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
    res.status(200).json({ message: "Staff successfully deleted!" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};
