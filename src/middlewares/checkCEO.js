import Staff from "../model/staff.js";


export default async function checkCEO(req, res, next) {
    try {

        const id = req.user_id

        const staff = await Staff.findById(id)


        if (!(staff.is_ceo === true)) {
            return res.status(403).json({
                message: "you have no authority. Only CEO can get payment datas",
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