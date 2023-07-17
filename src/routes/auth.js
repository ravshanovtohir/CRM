import Router from "express";
const router = Router();

import auth from "../controller/auth.js"


router.get("/login", auth.LOGIN_STAFF);
router.get("/student_login", auth.LOGIN_STUDENT);

export default router;
