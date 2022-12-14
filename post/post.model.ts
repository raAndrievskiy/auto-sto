const {model, Schema} = require('mongoose');

const Post = model('Post', {
    title: {type: String},
    text: {type: String},
    profilePhotoLocation: {type: String},
    created: {
        type: Date,
        default: new Date()
    }
});

module.exports = Post;
