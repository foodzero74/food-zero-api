import AuthError from '../Utils/AuthError';
import admin from '../config/firebaseAdmin';

async function getUserFromToken(token: string): Promise<admin.auth.DecodedIdToken | null> {
  try {
    if (!token) {
      return null;
    }
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    throw AuthError.throw('Invalid token');
  }
}

export default getUserFromToken;
