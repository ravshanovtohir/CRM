
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

    const img = req.files.file.name
    const fileName = Date.now() + img

    const banner = new Banner({
      title: req.body.title,
      img: fileName,
      description: req.body.description,
    });

    await banner.save();
    res.status(200).json({ message: "successfully added new banner", data: banner });
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
    const { title, description } = req.body;
    const cat = await Banner.findById(req.params.id)

    const category = await Banner.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title,
          img: req?.files?.file ? Date.now() + req?.files.file?.name : cat.img,
          description,
        },
      },
      { new: true }, // This line makes sure that the updated document is returned

    );

    return res
      .status(200)
      .json({
        status: 200,
        message: 'The banner successfully updated!',
        data: category
      })


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
