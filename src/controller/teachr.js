import Teachr from "../model/teachr.js";

// get All
export const getAllteachr = async (req, res) => {
  try {
    const teachr = await Teachr.find()
    res
      .status(200)
      .json({ message: "successfully get are teachrs", data: teachr });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// get
export const getOneteachr = async (req, res) => {
  try {
    const teachr = await Teachr.findById(req.params.id);
    if (!teachr) {
      res.status(404).json({ message: "Teacher not found", data: teachr });
    }
    res
      .status(200)
      .json({ message: "successfully get are staffs", data: teachr });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// post
export const addNewteachr = async (req, res) => {
  try {

    let fileName;

    if (!req?.fileName) {
      if (req.body.gender == "male") fileName = "male_teacher"
      if (req.body.gender == "female") fileName = "female_teacher"
    }


    const teachr = new Teachr({
      name: req.body.name,
      age: req.body.age,
      phone_number: req.body.phone_number,
      gender: req.body.gender,
      salary: req.body.salary,
      img: req?.fileName ? req?.fileName : fileName
    });

    await teachr.save();
    return res.status(200).json({ message: "successfully added", data: teachr });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//put
export const updateteachr = async (req, res) => {
  try {
    const { name, age, phone_number, gender, salary } = req.body;
    const teacher = await Teachr.findById(req.params.id);

    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found", data: teacher });
    }
    else {
      Teachr.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            name: name,
            age: age,
            phone_number: phone_number,
            gender: gender,
            salary: salary,
            img: req?.fileName ? req?.fileName : teacher.img
          },
        },
        { new: true },
        (err, updatedUser) => {
          if (err) {
            // console.error(err);
            return res.status(500).send("Error: " + err);
          } else {
            res.json(updatedUser);
          }
        }
      );
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//delete
export const deleteteachr = async (req, res) => {
  try {
    await Teachr.findByIdAndDelete(req.params.teacher);
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};
