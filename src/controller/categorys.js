import Category from "../model/category.js";

// get All
export const getAllcategory = async (req, res) => {
  try {
    const category = await Category.find();
    res
      .status(200)
      .json({ message: "successfully get are category", data: category });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// get
export const getOnecategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res
      .status(200)
      .json({ message: "successfully get are category", data: category });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// post
export const addNewcategory = async (req, res) => {
  try {
    const category = new Category({
      title: req.body.title,
      price: req.body.price,
    });

    await category.save();
    res.status(200).json({ message: "successfully updatedAt", data: category });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//put
export const updatecategory = async (req, res) => {
  try {
    const { title, price } = req.body;

    await Category.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title,
          price,
        },
      },
      { new: true }, // This line makes sure that the updated document is returned
      (err, updatedUser) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error: " + err);
        } else {
          res.json(updatedUser);
        }
      }
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//delete
export const deletecategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};
