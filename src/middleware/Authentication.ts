import admin from '../config/firebaseAdmin';
import { AuthenticationError } from 'apollo-server-express';

async function getUserFromToken(token: string): Promise<admin.auth.DecodedIdToken | null> {
  try {
    if (!token) {
      return null;
    }
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    throw new AuthenticationError('Invalid token');
  }
}

export default getUserFromToken;
