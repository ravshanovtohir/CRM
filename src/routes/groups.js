import Router from "express";
const router = Router();
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

router.post("/", addNewgroup);
router.put("/update/:id", updategroup);
router.get("/", getAllgroup);
router.get("/:id", getOnegroup);
router.delete("/delete/:id", deletegroup);
// router.post("/davomat/:id", davomat);
router.post("/delete/student/:id", deleteStudent);
router.get("/student/:id", getStudentFromGroup);

export default router;
