import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        // required: true,
        // unique: true,
    },
    profilePicture:{
        type: String,
    },
    isVerified:{
        type: Boolean,
        required: true,
    },
    
        
},{timestamps: true});

const User = mongoose.model("User", userSchema);

export default User