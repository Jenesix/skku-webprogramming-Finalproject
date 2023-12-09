import mongoose from 'mongoose';
const { Schema } = mongoose;

const episodeSchema = new Schema(
    {
        name: String,
        ep_course: String,
        description: String,
    }
);

const EP = mongoose.models.EP || mongoose.model("EP",episodeSchema);
export default EP;

