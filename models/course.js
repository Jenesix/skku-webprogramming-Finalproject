import mongoose from 'mongoose';
import EP from './episode';

const { Schema } = mongoose;
const courseSchema = new Schema(
    {
        name: String,
        course_cat: String,
        description: String,
    },
    {
        timestamps: true,
    }
);
const Course = mongoose.models.Course || mongoose.model("Course",courseSchema);
export default Course;