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

import checkRole from "../middlewares/checkingStatus.js";
import checkToken from "../middlewares/checkToken.js";
import validation from "../middlewares/validation.js";

router.post("/", checkToken, checkRole, validation.validationChiqim, addNewchiqim);
router.put("/update/:id", checkToken, checkRole, updatechiqim);
router.get("/", checkToken, checkRole, getAllchiqim);
router.get("/:id", checkToken, checkRole, getOnechiqim);
router.delete("/delete/:id", checkToken, checkRole, deletechiqim);
router.post("/filter", checkToken, checkRole, filterChiqim);

export default router;
