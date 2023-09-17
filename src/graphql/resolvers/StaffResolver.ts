import { StaffModel } from '../../models';
import { CreateStaffInput, UpdateStaffInput, GraphQLContext, ErrorType } from '../../types';
import AuthError from '../../Utils/AuthError';

export const StaffResolver = {
    Query: {
        staff: async () => {
            return await StaffModel.find({ disabled: false });
        },
    },
    Mutation: {
        createStaff: async (
            _: any,
            { input }: { input: CreateStaffInput },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.CREATE_STAFF);
            }

            const staff = new StaffModel(input);
            return await staff.save();
        },
        updateStaff: async (
            _: any,
            { input }: { input: UpdateStaffInput },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.UPDATE_STAFF);
            }

            return await StaffModel.findByIdAndUpdate(input.id, input, { new: true });
        },
        deleteStaff: async (
            _: any,
            { id }: { id: string },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.DELETE_STAFF);
            }

           return await StaffModel.findByIdAndUpdate(id, { disabled: true }, { new: true });
        },
        undeleteStaff: async (
            _: any,
            { id }: { id: string },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.UNDELETE_STAFF);
            }

            return await StaffModel.findByIdAndUpdate(id, { disabled: false }, { new: true });
        },
    },
};
