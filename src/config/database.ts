import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
export const connectToDb = async () => {
    try {
        const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@food-zero.bl8zylm.mongodb.net/`;
        await mongoose.connect(connectionString, {
            dbName: process.env.MONGO_DBNAME,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};