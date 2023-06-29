import express from "express";
import { connectDB } from "./src/config/connectDB.js";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs"
dotenv.config();
connectDB();

const app = express();
app.use(cors());

//Routes
import categoryRouter from "./src/routes/categorys.js";
import studentsRouter from "./src/routes/students.js";
import teacherRouter from "./src/routes/teacher.js";
import groupsRouter from "./src/routes/groups.js";
import kirimRouter from "./src/routes/kirim.js";
import chiqimRouter from "./src/routes/chiqim.js";
import staffRouter from "./src/routes/staff.js";
import bannerRouter from "./src/routes/banner.js";
import roleRouter from "./src/routes/role.js"

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/crm/teacher", teacherRouter);
app.use("/api/crm/student", studentsRouter);
app.use("/api/crm/category", categoryRouter);
app.use("/api/crm/groups", groupsRouter);
app.use("/api/crm/kirim", kirimRouter);
app.use("/api/crm/chiqim", chiqimRouter);
app.use("/api/crm/staff", staffRouter);
app.use("/api/crm/banner", bannerRouter);
app.use("/api/crm/role", roleRouter);

app.use((error, req, res, next) => {

    fs.appendFileSync('./log.txt', `${req.url}__${req.method}__${Date.now()}__${error.name}__${error.message}\n`)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
