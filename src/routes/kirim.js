import Router from "express";
const router = Router();
import {
  getAllkirim,
  getOnekirim,
  addNewkirim,
  updatekirim,
  deletekirim,
  filterKirim
} from "../controller/pay.js";

router.post("/", addNewkirim);
router.put("/update/:id", updatekirim);
router.get("/", getAllkirim);
router.get("/:id", getOnekirim);
router.post("/filter", filterKirim);
router.delete("/delete/:id", deletekirim);

export default router;
