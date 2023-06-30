import Staff from "../model/staff.js";


export default async function checkRole(req, res, next) {
    try {

        const id = req.user_id

        const staff = await Staff.findById(id)

        console.log(staff);

        if (!(staff.is_ceo === true || staff.is_admin === true)) {
            return res.status(403).json({
                message: "you have no authority",
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