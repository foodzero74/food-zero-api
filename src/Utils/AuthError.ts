import { GraphQLError } from 'graphql';

class AuthError extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'AuthError';

    Error.captureStackTrace(this, this.constructor);
  }

  static throw(message: string) {
    throw new GraphQLError(message, {
      extensions: {
        code: 'UNAUTHENTICATED',
        http: { status: 401 },
      },
    });
  }
}

export default AuthError;
