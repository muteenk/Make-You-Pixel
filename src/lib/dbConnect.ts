import mongoose from 'mongoose';

type connectionObject = {
  isConnected?: number;
}

const connection: connectionObject = {};

async function dbConnect(): Promise<void> {

if (connection.isConnected) {
    return;
  }

  try {
    console.log(process.env.MONGODB_URI);
    const db = await mongoose.connect(process.env.MONGODB_URI || '', {});
    connection.isConnected = db.connections[0].readyState;
    console.log('Database connected');
  }
  catch (error) {
    console.error('Database connection error: ', error);
    process.exit(1);
  }
}

export default dbConnect;
