import JWT from "../utils/JWT.js"
import Staff from "../model/staff.js"
import Students from "../model/students.js"

export default async function (req, res, next) {
    try {
        let { token } = req.headers
        let staffs = await Staff.find()
        let students = await Students.find()

        if (!token) {
            return res.status(400).json({
                message: "Staff is un authorized",
                data: false
            })
        }


        const { user_id, agent, ip } = JWT.verify(token)


        if (!(req.headers['user-agent'] == agent)) {
            return res.status(400).json({
                message: "Token is invalid",
                data: false
            })
        }

        if (!(req.headers['x-forwarded-for'] || req.socket.remoteAddress == ip)) {
            return res.status(400).json({
                message: "Token is invalid",
                data: false
            })
        }


        const staff = staffs.some(staff => staff._id == user_id)
        const student = students.filter(student => student._id == user_id)

        if (student) {
            req.user_id = user_id
            return next()
        }


        if (!(staff || student)) {
            console.log("hello");
            return res.status(400).json({
                message: "Token is invalid",
                data: false
            })
        }

        req.user_id = user_id

        next()
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: false,
        });
    }
}