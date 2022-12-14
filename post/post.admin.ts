import AdminJS from "adminjs";

const PostModel = require('../post/post.model')

const {
    after: photoAfterHook,
    before: photoBeforeHook
} = require('./actions/upload.photo.hook')

const contentParent = {
    name: 'Акции',
    icon: 'Tag'
}

const options = {
    parent: contentParent,
    properties: {
        created: {
            isVisible: false
        },
        text: {
            type: 'richtext',
            content: {
                name: 'Текст',
                components: {edit: AdminJS.bundle('./components/textarea.edit.tsx')}
            }
        },
        uploadImage: {
            components: {
                edit: AdminJS.bundle('./components/photo.edit.tsx'),
                list: AdminJS.bundle('./components/photo.list.tsx')
            }
        }
    },
    actions: {
        new: {
            after: async (response: any, request: any, context: any) => {
                return photoAfterHook(response, request, context)
            },
            before: async (request: any, context: any) => {
                return photoBeforeHook(request, context)
            }
        }
    }
}
module.exports = {
    options,
    resource: PostModel
}
