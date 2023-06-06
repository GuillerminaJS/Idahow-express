import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    

    title : { type: String, required: true },
    date : { type: String, required: true },
    desc :{ type: String, required: true},
    
},
    { versionKey: false }
);

const News = mongoose.model('News', newsSchema);
export default News;