import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        email: String,
        password: String,
        isAdmin: Boolean,
    }
);
const User = mongoose.models.User || mongoose.model("User",userSchema);
export default User;