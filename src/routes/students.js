import Router from "express";
const router = Router();
import {
  getAllstudent,
  getOnestudent,
  addNewstudent,
  updatestudent,
  deletestudent,
  addstudents,
  davomat
} from "../controller/students.js";

router.post("/", addNewstudent);
router.put("/update/:id", updatestudent);
router.get("/", getAllstudent);
router.get("/:id", getOnestudent);
router.delete("/delete/:id", deletestudent);
router.post("/addstudent/:id", addstudents);
router.post("/davomat/:id", davomat);

export default router;
