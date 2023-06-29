import Router from "express";
const router = Router();
import {
  getAllcategory,
  getOnecategory,
  addNewcategory,
  updatecategory,
  deletecategory,
} from "../controller/categorys.js";

router.post("/", addNewcategory);
router.put("/update/:id", updatecategory);
router.get("/", getAllcategory);
router.get("/:id", getOnecategory);
router.delete("/delete/:id", deletecategory);

export default router;