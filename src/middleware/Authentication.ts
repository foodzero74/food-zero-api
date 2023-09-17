import AuthError from '../utils/AuthError';
import admin from '../config/firebaseAdmin';
import { ErrorType } from '../types';

async function getUserFromToken(token: string): Promise<admin.auth.DecodedIdToken | null> {
  try {
    if (!token) {
      return null;
    }
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    throw AuthError.throw(ErrorType.INVALID_TOKEN);
  }
}

export default getUserFromToken;
