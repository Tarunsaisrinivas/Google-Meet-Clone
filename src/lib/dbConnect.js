import mongoose from "mongoose";

const MongoDB_URI = process.env.MONGODB_URI;

if (!MongoDB_URI) {
  throw new Error(
    "Please define the MongoDB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (!cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const object = {
      bufferCommand: false,
      serverSelectionTimeoutMS: 5000,
    };
    cached.promise = mongoose.connect(MONGODB_URI,object).then((mongoose)=>{
        return mongoose;
    })

  }
  try {
    cached.conn  = await cached.promise;

  } catch (error) {
    cached.promise=null
    throw error;
  }
  return cached.conn
}

export default dbConnect;
