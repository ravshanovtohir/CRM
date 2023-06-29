import Router from "express";
const router = Router();
import { getAllteachr, getOneteachr, deleteteachr, updateteachr, addNewteachr } from "../controller/teachr.js";

router.post("/", addNewteachr);
router.get("/", getAllteachr);
router.get("/:id", getOneteachr);
router.delete("/delete/:teacher", deleteteachr);
router.put("/update/:id", updateteachr);

export default router;
