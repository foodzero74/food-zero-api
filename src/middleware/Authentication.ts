import admin from '../config/firebaseAdmin';
import { AuthenticationError } from 'apollo-server-express';

async function getUserFromToken(token: string): Promise<admin.auth.DecodedIdToken | null> {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    console.error('Error verifying token:', error);
    throw new AuthenticationError('You must be logged in!');
  }
}

export default getUserFromToken;
