import Router from "express";
const router = Router();
import {
  getAllstaff,
  getOnestaff,
  addNewstaff,
  updatestaff,
  deletestaff,
} from "../controller/staff.js";

router.post("/", addNewstaff);
router.put("/update/:id", updatestaff);
router.get("/", getAllstaff);
router.get("/:id", getOnestaff);
router.delete("/delete/:id", deletestaff);

export default router;
