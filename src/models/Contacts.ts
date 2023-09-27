import mongoose from 'mongoose';

const ContactsSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
}, { collection: 'contacts' });


export const ContactsModel = mongoose.model('Contacts', ContactsSchema);
