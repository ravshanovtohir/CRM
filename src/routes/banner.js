import Router from "express";
const router = Router();

import checkToken from "../middlewares/checkToken.js";
import checkRole from "../middlewares/checkingStatus.js";
import validator from "../middlewares/validation.js";
import uploadFileForBanner from "../utils/fileUpload.js";

import {
  getAllBanner,
  getOneBanner,
  addNewBanner,
  updateBanner,
  deleteBanner,
} from "../controller/banner.js";

router.post("/", checkToken, checkRole, validator.validateBanner, uploadFileForBanner, addNewBanner);
router.put("/update/:id", checkToken, checkRole, updateBanner);
router.get("/", checkToken, checkRole, getAllBanner);
router.get("/:id", checkToken, checkRole, getOneBanner);
router.delete("/delete/:id", checkToken, checkRole, deleteBanner);

export default router;