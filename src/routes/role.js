import Router from "express";
const router = Router()



import checkToken from "../middlewares/checkToken.js";
import checkRole from "../middlewares/checkingStatus.js";

import role from "../controller/role.js"

router.get("/", checkToken, checkRole, role.GET)
router.get("/:id", checkToken, checkRole, role.GET);
router.post("/", checkToken, checkRole, role.POST)
router.put("/update/:id", checkToken, checkRole, role.UPDATE)
router.delete("/delete/:id", checkToken, checkRole, role.DELETE)

export default router
