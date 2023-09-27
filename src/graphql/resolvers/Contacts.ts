import { CreateContactInput, GraphQLContext } from '../../types';
import { ContactsModel } from '../../models';
import mongoose from 'mongoose';

export const ContactResolver = {
    Query: {
        getContacts: async () => {
            return await ContactsModel.find();
        },
    },
    Mutation: {
        createContact: async (
            _: any,
            { input }: { input: CreateContactInput },
            __: GraphQLContext
        ) => {
            try {
                const contact = new ContactsModel(input);
                return await contact.save();
            } catch (error) {
                let e = error as mongoose.Error;
                if (e.name === "MongoServerError") {
                    const email = e.message.match(/email: "([^"]*)"/)?.[1];
                    throw new Error(`The email ${email} is already registered.`);
                }
                throw error;
            }
        },
    }
};
