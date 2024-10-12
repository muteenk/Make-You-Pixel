import mongoose, { Schema, Document } from 'mongoose';
import {IUser} from '@/lib/interfaces/authInterfaces';

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
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


const UserModel = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default UserModel;
