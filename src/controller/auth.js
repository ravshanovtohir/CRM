import sha256 from "sha256";
import Staff from "../model/staff.js";
import JWT from "../utils/JWT.js";

const LOGIN_STAFF = async (req, res, next) => {
    try {

        const { name, password } = req.body
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
        const agent = req.headers['user-agent']

        if (!(name || password)) {
            return res.status(403).json({
                message: "name or password required!!!",
                data: false
            })
        }

        let staff = await Staff.findOne({ name, password: sha256(password) })

        staff = staff.toObject()

        delete staff.password
        delete staff.is_ceo
        delete staff.is_admin

        if (!staff) {
            return res.status(401).json({
                message: "Invalid username or password",
                data: false
            })

        }

        return res
            .status(200)
            .json({
                status: 200,
                message: 'The staff successfully logged in!',
                token: JWT.sign({ user_id: staff._id, name, ip, agent }),
                data: staff
            })




    } catch (error) {
        return res.status(500).json({
            message: error.message,
            data: false,
        });
    }
}

export default {
    LOGIN_STAFF
}