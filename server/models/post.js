const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: String,
    contents: String,
    tags: [String],
    writeDate: {
        type: Date,
        default: Date.now,
    },
    user: {
        _id: mongoose.Types.ObjectId,
        name: String
    }
});



const Post = mongoose.model("Post", postSchema);

module.exports = Post;