import Router from "express";
const router = Router();

import checkRole from "../middlewares/checkingStatus.js";
import checkToken from "../middlewares/checkToken.js";
import validation from "../middlewares/validation.js";

import {
  getAllgroup,
  getOnegroup,
  addNewgroup,
  updategroup,
  deletegroup,
  deleteStudent,
  // davomat,
  getStudentFromGroup,
} from "../controller/groups.js";

router.post("/", checkToken, checkRole, validation.validateGroup, addNewgroup);
router.put("/update/:id", checkToken, checkRole, updategroup);
router.get("/", checkToken, checkRole, getAllgroup);
router.get("/:id", checkToken, checkRole, getOnegroup);
router.delete("/delete/:id", deletegroup);
// router.post("/davomat/:id", checkToken, checkRole, davomat);
router.post("/delete/student/:id", checkToken, checkRole, deleteStudent);
router.get("/student/:id", checkToken, checkRole, getStudentFromGroup);

export default router;
