import fs from "fs"
import path from "path"

export default async function uploadFileForBanner(req, res, next) {
    try {

        if (!(req?.files?.file)) {
            console.log("Otqizvoryaptiku");
            return next()
        }

        const file = req.files.file
        const { size, mimetype, data, name } = file

        if (size > (10 * 1024 * 1024)) {
            return res.status(413).json({
                message: 'The file larger than 10MB!',
                data: false
            })
        }

        if (!['image/png', 'image/jpeg', 'image/jpg'].includes(mimetype)) {
            return res.status(415).json({
                message: "The file must be jpg ,jpeg or png!",
                data: false
            })
        }

        const fileName = Date.now() + name.replace(/\s/g, '')
        const pathName = path.join(process.cwd(), 'uploads', fileName)
        fs.writeFileSync(pathName, data)

        req.fileName = fileName
        console.log(1);
        console.log(req.fileName);

        next()

    } catch (error) {
        return res.status(500).json({
            message: error.message,
            data: false,
        });
    }
}