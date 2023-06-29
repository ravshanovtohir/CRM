import Router from "express";
const router = Router()

import role from "../controller/role.js"

router.get("/", role.GET)
router.get("/:id", role.GET);
router.post("/", role.POST)
router.put("/update/:id", role.UPDATE)
router.delete("/delete/:id", role.DELETE)

export default router
