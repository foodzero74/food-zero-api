import { GraphQLError } from 'graphql';

class AuthError extends Error {
  constructor(message: string) {
    super(message);

    // Set the name to your custom error class name
    this.name = 'AuthError';

    // Capture the stack trace
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
