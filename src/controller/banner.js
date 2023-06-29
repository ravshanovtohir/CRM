
import Banner from "../model/banner.js";

// get All
export const getAllBanner = async (req, res) => {
  try {
    const banner = await Banner.find();
    res
      .status(200)
      .json({ message: "successfully get are Banner", data: banner });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// get
export const getOneBanner = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);
    res
      .status(200)
      .json({ message: "successfully get are Banner", data: banner });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// post
export const addNewBanner = async (req, res) => {
  try {
    const banner = new Banner({
      title: req.body.title,
      img: req.body.img,
      description: req.body.description,
    });

    await banner.save();
    res.status(200).json({ message: "successfully loaded", data: banner });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//put
export const updateBanner = async (req, res) => {
  try {
    const { title, img, description } = req.body;

    await Banner.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title,
          img,
          description,
        },
      },
      { new: true }, // This line makes sure that the updated document is returned
      (err, updatedBanner) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error: " + err);
        } else {
          res.json(updatedBanner);
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
export const deleteBanner = async (req, res) => {
  try {
    await Banner.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};
