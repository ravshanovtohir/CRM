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

import checkRole from "../middlewares/checkingStatus.js";
import checkToken from "../middlewares/checkToken.js";
import validation from "../middlewares/validation.js";
import checkCEO from "../middlewares/checkCEO.js";

router.post("/", checkToken, checkRole, validation.validationKirim, addNewkirim);
router.put("/update/:id", checkToken, checkRole, updatekirim);
router.get("/", checkToken, checkCEO, getAllkirim);
router.get("/:id", checkToken, checkCEO, getOnekirim);
router.post("/filter", checkToken, checkCEO, filterKirim);
router.delete("/delete/:id", checkToken, checkRole, deletekirim);

export default router;
