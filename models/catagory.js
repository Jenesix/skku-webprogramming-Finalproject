import mongoose from 'mongoose';
const { Schema } = mongoose;

const catagorySchema = new Schema(
    {
        name: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const Catagory = mongoose.models.Catagory || mongoose.model("Catagory",catagorySchema);
export default Catagory;