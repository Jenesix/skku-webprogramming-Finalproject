import mongoose from 'mongoose';

const { Schema } = mongoose;
const courseSchema = new Schema(
    {
        name: String,
        course_cat: String,
        description: String,
        cover_img: String
    },
    {
        timestamps: true,
    }
);
const Course = mongoose.models.Course || mongoose.model("Course",courseSchema);
export default Course;