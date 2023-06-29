import Role from "../model/role.js"

const GET = async (req, res, next) => {
    try {
        let role_id = req.params.id

        if (role_id) {

            const role = await Role.findById(role_id)

            return res
                .status(200)
                .json({
                    status: 200,
                    message: 'successfully get role by ID!',
                    data: role
                })
        }

        const roles = await Role.find()

        return res
            .status(200)
            .json({
                status: 200,
                message: 'successfully get all roles!',
                data: roles
            })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: false
        })
    }
}

const POST = async (req, res, next) => {
    try {

        const roles = await Role.find()

        const { role_title } = req.body

        if (!role_title) {

            return res.status(403).json({
                message: "Role title required",
                data: false
            })

        }

        if (role_title.length > 15 || role_title.length <= 2) {

            return res.status(403).json({
                message: "Invalid length for role title. Length of role title must be more then 2 and less then 15",
                data: false
            })

        }

        const role_title_exict = roles.find(el => el.role_title === role_title)

        if (role_title_exict) {
            return res.status(403).json({
                message: "This role already exict!",
                data: false
            })
        }

        const new_role = new Role({
            role_title: role_title
        })


        await new_role.save()

        return res
            .status(200)
            .json({
                status: 200,
                message: 'successfully added new role!',
                data: new_role
            })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: false
        })
    }
}

const UPDATE = async (req, res, next) => {
    try {

        const { role_title } = req.body
        const id = req.params.id

        const role = await Role.findById(id)

        if (role_title === role.role_title) {
            return res.status(403).json({
                message: "No change was made!",
                data: false
            })
        }

        const updatedUser = await Role.findByIdAndUpdate(
            {
                _id: id
            },
            {
                $set: {
                    role_title
                }
            },
            {
                new: true
            },

        )

        return res
            .status(200)
            .json({
                status: 200,
                message: 'Role successfully updated!!',
                data: updatedUser
            })


    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: false
        })
    }
}

const DELETE = async (req, res, next) => {
    try {

        const id = req.params.id

        if (!id) {
            return res.status().json({
                message: "id required",
                data: false
            })
        }

        await Role.findByIdAndDelete(id)

        return res
            .status(200)
            .json({
                status: 200,
                message: 'role successfully deleted!',
            })

    } catch (error) {
        return res.status(500).json({
            message: error.message,
            data: false
        })

    }
}




export default {
    GET,
    POST,
    UPDATE,
    DELETE
}