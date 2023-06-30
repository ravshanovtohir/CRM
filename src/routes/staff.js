import Router from "express";
const router = Router();
import {
  getAllstaff,
  getOnestaff,
  addNewstaff,
  updatestaff,
  deletestaff,
} from "../controller/staff.js";

import checkToken from "../middlewares/checkToken.js";
import checkRole from "../middlewares/checkingStatus.js";

router.post("/", checkToken, checkRole, addNewstaff);
router.put("/update/:id", checkRole, checkToken, updatestaff);
router.get("/", checkToken, checkRole, getAllstaff);
router.get("/:id", checkToken, checkRole, getOnestaff);
router.delete("/delete/:id", checkRole, checkToken, deletestaff);

export default router;
