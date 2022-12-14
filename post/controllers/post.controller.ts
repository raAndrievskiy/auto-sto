const PostModel = require('../post.model')

module.exports.getAll = async (req: any, res: any) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts)
    } catch (e: any) {
        console.log(e.message)
    }
}

module.exports.getPostById = async (req: any, res: any) => {
    const {id} = req.query
    try {
        const post = await PostModel.findById(id);
        post
            ? res.status(200).json(post)
            : res.status(200).json({message: 'Не найдено!'})
    } catch (e: any) {
        console.log(e.message)
    }
}
