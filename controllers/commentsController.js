import Comments from "../models/Comments.js";

// Muestra todos los comentarios
export const showAllComments = async (req, res) => {
    try {
        const comments = await Comments.find({}).populate("user");
        res.json(comments);
    } catch (error) {
        console.log(error);
    }
};

// Muestra comentario por id
export const showCommentById = async (req, res) => {
    const comment = await Comments.findById(req.params.idComment);
    if (!comment) {
        res.json({ message: 'This comment does not exist' });
    }
    res.json(comment);
};

// Crea comentario
export const newComment = async (req, res) => {
    const comment = new Comments(req.body);

    try {
        await comment.save();
        res.json({ message: 'New Comment was added with' + req.params.idComment });
    } catch (error) {
        res.send(error);
    }
};

// Modificacion de comentario
export const updateComment = async (req, res) => {
    try {
        const filter = { _id: req.body.id };
        const update = req.body;
        const options = { new: true };
        const comment = await Comments.findOneAndUpdate(filter, update, options);
        res.json(comment);
    } catch (error) {
        res.send(error);
    }
};

// Eliminacion de comentario
export const deleteComment = async (req, res) => {
    try {
        await Comments.findByIdAndDelete({ _id: req.params.idComment });
        res.json({ message: 'The comment was deleted' + req.params.idComment });
    } catch (error) {
        console.log(error);
    }
};