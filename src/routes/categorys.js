import Router from "express";
const router = Router();

import checkToken from "../middlewares/checkToken.js";
import checkRole from "../middlewares/checkingStatus.js";
import validator from "../middlewares/validation.js"

import {
  getAllcategory,
  getOnecategory,
  addNewcategory,
  updatecategory,
  deletecategory,
} from "../controller/categorys.js";

router.post("/", checkToken, checkRole, validator.validateCategory, addNewcategory);
router.put("/update/:id", checkToken, checkRole, updatecategory);
router.get("/", checkToken, checkRole, getAllcategory);
router.get("/:id", checkToken, checkRole, getOnecategory);
router.delete("/delete/:id", checkToken, checkRole, deletecategory);

export default router;