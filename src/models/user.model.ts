import mongoose, { Schema, Document } from 'mongoose';
import {IUser} from '@/lib/interfaces/authInterfaces';

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    //required: true,
    //unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email already exists"],
    match: [/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/, "Please fill a valid email address"],
  },
  avatar: {
    type: String,
  },
  verifyCode: {
    type: String,
  },
  verifyCodeExpires: {
    type: Date,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: 'user',
  },
});


const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
