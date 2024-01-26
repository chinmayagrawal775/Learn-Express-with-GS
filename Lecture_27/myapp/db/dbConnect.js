import mongoose from 'mongoose';

const OPTIONS = {
    dbName: process.env.DB_NAME
}

const connectDb = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL, OPTIONS)
        console.log("Database Connected...")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;