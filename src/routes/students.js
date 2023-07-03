import Router from "express";
const router = Router();

import checkToken from "../middlewares/checkToken.js";
import checkRole from "../middlewares/checkingStatus.js";
import validation from "../middlewares/validation.js";

import {
  getAllstudent,
  getOnestudent,
  addNewstudent,
  updatestudent,
  deletestudent,
  addstudents,
  davomat
} from "../controller/students.js";

router.post("/", checkToken, checkRole, validation.validateStudent, addNewstudent);
router.put("/update/:id", checkToken, checkRole, updatestudent);
router.get("/", checkToken, checkRole, getAllstudent);
router.get("/:id", checkToken, checkRole, getOnestudent);
router.delete("/delete/:id", checkToken, checkRole, deletestudent);
router.post("/addstudent/:id", checkToken, checkRole, addstudents);
router.post("/davomat/:id", checkToken, checkRole, davomat);

export default router;
