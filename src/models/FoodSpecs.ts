import mongoose from 'mongoose';

const FoodSpecsSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, { collection: 'food_specs' });


export const FoodSpecsModel = mongoose.model('FoodSpecs', FoodSpecsSchema);
