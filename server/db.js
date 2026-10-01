import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let cachedConn = null;

export async function connectDB() {
  if (cachedConn && mongoose.connection.readyState === 1) {
    return true;
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error('❌ [MongoDB Error]: MONGODB_URI is not defined in your .env file.');
    return false;
  }

  if (uri.includes('<db_username>') || uri.includes('<db_password>')) {
    console.warn(
      '⚠️ [MongoDB Notice]: Your MONGODB_URI in .env still has placeholder values (<db_username> or <db_password>).\n' +
      '👉 Please open the .env file in the root folder and replace <db_username> and <db_password> with your actual MongoDB Atlas database user credentials.'
    );
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    cachedConn = conn;
    console.log(`✅ [MongoDB Connected]: Successfully connected to cluster: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`❌ [MongoDB Connection Error]: ${error.message}`);
    return false;
  }
}

export function isDBConnected() {
  return mongoose.connection.readyState === 1;
}
