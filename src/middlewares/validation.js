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

export default {
    validateBanner,
    validateCategory
}