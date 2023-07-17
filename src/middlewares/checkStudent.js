import Staff from "../model/staff.js";
import students from "../model/students.js";


export default async function checkStudent(req, res, next) {
    try {

        const id = req.user_id

        if (id !== req.params.id) {
            return res.status(403).json({
                message: "you have no authority.",
                data: false
            })

        }

        next()

    } catch (error) {
        return res.status(500).json({
            message: error.message,
            data: false,
        });
    }
}  
