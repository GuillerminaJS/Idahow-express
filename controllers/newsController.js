import News from "../models/News.js";

export const showAllNews = async (req, res) => {
    try {
        const news = await News.find({});
        res.json(news);
    } catch (error) {
        console.log(error);
    }
};

export const showNewsById = async (req, res) => {
    const news = await News.findById(req.params.idNews);
    if (!news) {
        res.json({ message: 'This news does not exist' });
    }
    res.json(tag);
};

export const newNews = async (req, res) => {
    const news = new News(req.body);
    try {
        await news.save();
        res.json({ message: 'New news was added' });
    } catch (error) {
        res.send(error);
    }
};

export const updateNews = async (req, res) => {
    try {
        const filter = { _id: req.body.id };
        const update = req.body;
        const options = { new: true };
        const news = await News.findOneAndUpdate(filter, update, options);
        res.json(news);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

export const deleteNews = async (req, res) => {
    try {
        await News.findByIdAndDelete({ _id: req.params.idNews });
        res.json({ message: 'The news was deleted' + req.params.idNews });
    } catch (error) {
        console.log(error);
    }
};