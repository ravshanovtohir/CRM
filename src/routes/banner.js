import Router from "express";
const router = Router();
import {
  getAllBanner,
  getOneBanner,
  addNewBanner,
  updateBanner,
  deleteBanner,
} from "../controller/banner.js";

router.post("/", addNewBanner);
router.put("/update/:id", updateBanner);
router.get("/", getAllBanner);
router.get("/:id", getOneBanner);
router.delete("/delete/:id", deleteBanner);

export default router;