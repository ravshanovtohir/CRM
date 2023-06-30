import Router from "express";
const router = Router();

import auth from "../controller/auth.js"


router.get("/login", auth.LOGIN_STAFF);

export default router;
