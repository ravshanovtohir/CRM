const regexPhoneNumber = /^998[389][012345789][0-9]{7}$/

async function validateBanner(req, res, next) {
    try {

        const { title, description } = req.body

        if (!title) {
            return res.status(500).json({
                message: "Title required!",
                data: false,
            });
        }
        if (title.length > 40 || title.length <= 3) {
            return res.status(500).json({
                message: "Invalid length for title. Length of title must more then 3 and less than 40!",
                data: false,
            });
        }

        if (!req?.files?.file) {
            return res.status(500).json({
                message: "File required!",
                data: false,
            });
        }

        if (!description) {
            return res.status(500).json({
                message: "Description for course required!",
                data: false,
            });
        }

        next()

    } catch (error) {
        return res.status(500).json({
            message: error.message,
            data: false,
        });
    }
}


async function validateCategory(req, res, next) {
    try {

        const { title, price } = req.body

        if (!title) {
            return res.status(500).json({
                message: "Title required!",
                data: false,
            });
        }
        if (title.length > 40 || title.length <= 3) {
            return res.status(500).json({
                message: "Invalid length for title. Length of title must more then 3 and less than 40!",
                data: false,
            });
        }


        if (!price) {
            return res.status(500).json({
                message: "Price required!",
                data: false,
            });
        }

        next()

    } catch (error) {
        return res.status(500).json({
            message: error.message,
            data: false,
        });
    }
}

async function validationTeacher(req, res, next) {
    try {

        const { name, age, phone_number, gender, salary } = req.body

        if (!name) {
            return res.status(500).json({
                message: "Name required!",
                data: false,
            });
        }

        if (name.length > 25 || name.length <= 6) {
            return res.status(500).json({
                message: "Invalid length for name. Length of name must more then 6 and less than 25!",
                data: false,
            });
        }

        if (!age) {
            return res.status(500).json({
                message: "age required!",
                data: false,
            });
        }

        if (!phone_number) {
            return res.status(500).json({
                message: "phone number required!",
                data: false,
            });
        }
        let phone = regexPhoneNumber.test(phone_number)

        if (!phone) {
            return res.status(500).json({
                message: "Invalid phone number!",
                data: false,
            });
        }

        if (!gender) {
            return res.status(500).json({
                message: "gender required!",
                data: false,
            });
        }

        if (!salary) {
            return res.status(500).json({
                message: "salary required!",
                data: false,
            });
        }

        next()


    } catch (error) {
        return res.status(500).json({
            message: error.message,
            data: false,
        });
    }
}

export default {
    validateBanner,
    validateCategory,
    validationTeacher
}