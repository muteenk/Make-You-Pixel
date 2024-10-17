import mongoose, { Schema } from 'mongoose';
import {IUser} from '@/lib/interfaces/authInterfaces';

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username already exists"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
    match: [/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/, "Please fill a valid email address"],
  },
  image: {
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
  provider: {
    type: String,
  },
  role: {
    type: String,
    default: 'user',
  },
});


const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
