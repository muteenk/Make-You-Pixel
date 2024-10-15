import mongoose, { Mongoose } from 'mongoose'

const uri: string | undefined = process.env.MONGODB_URI

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

interface MongooseCache {
  conn: Mongoose | null
  promise: Promise<Mongoose> | null
}

let cached: MongooseCache = global.mongoose as MongooseCache

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect(): Promise<Mongoose> {

  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    //const opts = {
    //  useNewUrlParser: true,
    //  useUnifiedTopology: true,
    //  bufferCommands: false,
    //  bufferMaxEntries: 0,
    //  useFindAndModify: false,
    //  useCreateIndex: true,
    //}

    cached.promise = mongoose.connect(uri!, {}).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect

