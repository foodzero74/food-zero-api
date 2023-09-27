import { CreateContactInput, GraphQLContext } from '../../types';
import { ContactsModel } from '../../models';

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
            const contact = new ContactsModel(input);
            return await contact.save();
        },
    }
};
