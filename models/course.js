import mongoose from 'mongoose';
import EP from './episode';

const { Schema } = mongoose;
const courseSchema = new Schema(
    {
        name: String,
        description: String,
        arrayOfEpisodes:{ 
            ep: Schema.Types.ObjectId,
            ref: EP,
        },
    }
);
const Course = mongoose.models.Course || mongoose.model("Course",courseSchema);
export default Course;