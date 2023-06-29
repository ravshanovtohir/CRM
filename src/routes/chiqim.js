import Router from "express";
const router = Router();
import {
  getAllchiqim,
  getOnechiqim,
  addNewchiqim,
  updatechiqim,
  deletechiqim,
  filterChiqim,
} from "../controller/chiqim.js";

router.post("/", addNewchiqim);
router.put("/update/:id", updatechiqim);
router.get("/", getAllchiqim);
router.get("/:id", getOnechiqim);
router.delete("/delete/:id", deletechiqim);
router.post("/filter", filterChiqim);

export default router;
