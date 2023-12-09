import mongoose from 'mongoose';
const { Schema } = mongoose;

const episodeSchema = new Schema(
    {
        name: String,
        description: String,
    }
);
const EP = mongoose.models.EP || mongoose.model("EP",episodeSchema);
export default EP;

const courseSchema = new Schema(
    {
        name: String,
        description: String,
        arrayOfepisode:[episodeSchema],
    }
);

const catagorySchema = new Schema(
    {
        name: String,
        arrayOfCourse:[courseSchema],

    }
);

const userSchema = new Schema(
    {
        email: String,
        password: String,
        isAdmin: Boolean,
    }
)