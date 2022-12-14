const path = require('path')
const fs = require('fs')
import AdminJS from "adminjs";

/** @type {AdminJs.after} **/
const after = async (response: any, request: any, context: any) => {
    const {record, uploadImage} = context;

    if (record.isValid() && uploadImage) {
        const filePath = path.join('uploads', record.id().toString(), uploadImage.name);
        await fs.promises.mkdir(path.dirname(filePath), {recursive: true})
        await fs.promises.rename(uploadImage.path, filePath);
        // await record.update({profilePhotoLocation: `${process.env.BASE_URL}/${filePath}`})
        await record.update({profilePhotoLocation: `/${filePath}`})
    }
    return response
}

/** @type {AdminJs.before} **/
const before = async (request: any, context: any) => {
    if (request.method === 'post') {
        const {uploadImage, ...otherParams} = request.payload
        context.uploadImage = uploadImage;
        return {
            ...request,
            payload: otherParams
        }
    }
    return request
}

module.exports = {after, before}
