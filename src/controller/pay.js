import Pay from "../model/payment.js";

// get All
export const getAllkirim = async (req, res) => {
  try {
    const kirim = await Pay.find();
    res
      .status(200)
      .json({ message: "successfully get are kirim", data: kirim });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// get
export const getOnekirim = async (req, res) => {
  try {
    const kirim = await Pay.findById(req.params.id);
    res
      .status(200)
      .json({ message: "successfully get are kirim", data: kirim });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// post
export const addNewkirim = async (req, res) => {
  try {
    const kirim = new Pay({
      category: req.body.category,
      filial: req.body.filial,
      fullName: req.body.fullName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      date: req.body.date,
      price: req.body.price,
      paymentType: req.body.paymentType,
      description: req.body.description,
    });

    await kirim.save();
    res.status(200).json({ message: "successfully updatedAt", data: kirim });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//put
export const updatekirim = async (req, res) => {
  try {
    const {
      category,
      filial,
      fullName,
      lastName,
      phoneNumber,
      date,
      price,
      paymentType,
      description,
    } = req.body;

    const kirim = await Pay.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          category,
          filial,
          fullName,
          lastName,
          phoneNumber,
          date,
          price,
          paymentType,
          description,
        },
      },
      { new: true, useFindAndModify: false }
    );
    if (!kirim) {
      res.status(500).json({
        message: "Is not a kirim",
        data: false,
      });
    } else {
      res.status(200).json({ message: "Successfully updated", data: kirim });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//delete
export const deletekirim = async (req, res) => {
  try {
    await Pay.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted", data: true });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

export const filterKirim = async (req, res) => {
  try {
    const { date } = req.body;
    const month = date.split("/").slice(0);
    const year = date.split("/").slice(2);

    await Pay.find({ month: month, year: year })
      .then((profile) => {
        if (!profile) {
          return res.status(404).json({ error: "No Profile Found" });
        } else {
          res
            .status(200)
            .json({
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
