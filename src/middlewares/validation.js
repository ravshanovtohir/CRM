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

        const { title, price, duration } = req.body

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

        if (!duration) {
            return res.status(500).json({
                message: "Duration of course required! (Please enter for months)",
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

async function validateStudent(req, res, next) {
    try {

        const { name, date_birth, gender, phoneNumber, group, days } = req.body

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

        if (!date_birth) {
            return res.status(403).json({
                message: "data birth is required",
                data: false
            })
        }

        // let date = regexDataBirth.test(date_birth)
        if (new Date(date_birth) == "Invalid Date") {
            return res.status(403).json({
                message: `Invalid date birth. must be YYYY.MM.DD`,
                data: false
            })
        }

        if (!phoneNumber) {
            return res.status(500).json({
                message: "phone number required!",
                data: false,
            });
        }
        let phone = regexPhoneNumber.test(phoneNumber)

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

        if (!(gender == "male" || gender == "female")) {
            return res.status(500).json({
                message: "gender must be male or female!",
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

async function validationGroup(req, res, next) {
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

async function validateGroup(req, res, next) {
    try {

        const { gropName, teacher, room, category, day, startTime, startGroup, endGroup, students, date } = req.body

        if (!gropName) {
            return res.status(500).json({
                message: "GroupName  required!",
                data: false,
            });
        }

        if (gropName.length > 40 || gropName.length <= 6) {
            return res.status(500).json({
                message: "Invalid length for name. Length of name must more then 6 and less than 40!",
                data: false,
            });
        }

        if (!teacher) {
            return res.status(500).json({
                message: "Teacher required!",
                data: false,
            });
        }

        if (!room) {
            return res.status(500).json({
                message: "room required!",
                data: false,
            });
        }

        //roomni togri kiritilganligini tekshirish kerak

        if (!category) {
            return res.status(500).json({
                message: "Category required!",
                data: false,
            });
        }

        //category togri kiritilganligi yani suhnaqa kategoriya borligini tekshirish kerak

        if (!day) {
            return res.status(500).json({
                message: "day required!",
                data: false,
            });
        }

        if (!(day == "toq" || day == "juft")) {
            return res.status(500).json({
                message: "day must be odd or even!",
                data: false,
            });
        }

        if (!startGroup) {
            return res.status(500).json({
                message: "start day of group required!",
                data: false,
            });
        }
        if (new Date(startGroup) == "Invalid Date") {
            return res.status(500).json({
                message: "Invalid date!",
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


async function validationChiqim(req, res, next) {
    try {

        const { category, filial, name, date, price, description } = req.body

        if (!category) {
            return res.status(500).json({
                message: "Category ID  required!",
                data: false,
            });
        }

        if (!filial) {
            return res.status(500).json({
                message: "Filial  required!",
                data: false,
            });
        }


        if (filial.length > 35 || filial.length <= 4) {
            return res.status(500).json({
                message: "Invalid length for name. Length of name must more then 6 and less than 35 !",
                data: false,
            });
        }

        if (!name) {
            return res.status(500).json({
                message: "Name required!",
                data: false,
            });
        }

        if (!date) {
            return res.status(500).json({
                message: "Date required!",
                data: false,
            });
        }

        if (new Date(date) == "Invalid Date") {
            return res.status(500).json({
                message: "Invalid date! Date  MUST be YYYY.MM.DD",
                data: false,
            });
        }
        //roomni togri kiritilganligini tekshirish kerak

        if (!price) {
            return res.status(500).json({
                message: "Price required!",
                data: false,
            });
        }

        if (!description) {
            return res.status(500).json({
                message: "Description required!",
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
    validationTeacher,
    validateStudent,
    validateGroup,
    validationChiqim
}