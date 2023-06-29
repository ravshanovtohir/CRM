import Chiqim from "../model/chiqim.js";

// get All
export const getAllchiqim = async (req, res) => {
  try {
    const chiqim = await Chiqim.find();
    res
      .status(200)
      .json({ message: "successfully get are chiqim", data: chiqim });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// get
export const getOnechiqim = async (req, res) => {
  try {
    const chiqim = await Chiqim.findById(req.params.id);
    res
      .status(200)
      .json({ message: "successfully get are chiqim", data: chiqim });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// post
export const addNewchiqim = async (req, res) => {
  try {
    const chiqim = new Chiqim({
      category: req.body.category,
      filial: req.body.filial,
      name: req.body.name,
      date: req.body.date,
      price: req.body.price,
      description: req.body.description,
    });

    await chiqim.save();
    res.status(200).json({ message: "successfully updatedAt", data: chiqim });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//put
export const updatechiqim = async (req, res) => {
  try {
    const { category, filial, name, date, price, description } = req.body;

    const chiqim = await Chiqim.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          category,
          filial,
          name,
          date,
          price,
          description,
        },
      },
      { new: true, useFindAndModify: false }
    );
    if (!chiqim) {
      res.status(500).json({
        message: "Is not a chiqim",
        data: false,
      });
    } else {
      res.status(200).json({ message: "Successfully updated", data: chiqim });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//delete
export const deletechiqim = async (req, res) => {
  try {
    await Chiqim.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

export const filterChiqim = async (req, res) => {
  try {
    const { date } = req.body;

    await Chiqim.find({ date: date })
      .then((profile) => {
        if (!profile) {
          return res.status(404).json({ error: "No Profile Found" });
        } else {
          res.status(200).json({
            message: "Succesfully filter pay by month",
            data: profile,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
