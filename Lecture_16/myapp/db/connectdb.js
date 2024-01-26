import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {

        const DB_OPTIONS = {
            user: 'geek',
            pass: '123',
            dbName: 'schooldb',
            authSource: 'schooldb'
        }

        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("db connected");
    } catch (err) {
        console.log(err);
    }
}

export default connectDB