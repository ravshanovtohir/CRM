import Router from "express";
const router = Router();

import checkToken from "../middlewares/checkToken.js";
import checkRole from "../middlewares/checkingStatus.js";
import validation from "../middlewares/validation.js";
import fileUpload from "../utils/fileUpload.js"

import { getAllteachr, getOneteachr, deleteteachr, updateteachr, addNewteachr } from "../controller/teachr.js";
import uploadFileForBanner from "../utils/fileUpload.js";

router.post("/", checkToken, checkRole, validation.validationTeacher, uploadFileForBanner, addNewteachr);
router.get("/", checkToken, checkRole, getAllteachr);
router.get("/:id", checkToken, checkRole, getOneteachr);
router.delete("/delete/:teacher", checkToken, checkRole, deleteteachr);
router.put("/update/:id", checkToken, checkRole, fileUpload, updateteachr);

export default router;
