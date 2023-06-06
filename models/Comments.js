import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
    

    comment: { type: String, required: true },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'Users'
    },

},
    { versionKey: false }
);

const Comments = mongoose.model('Comments', commentsSchema);
export default Comments;