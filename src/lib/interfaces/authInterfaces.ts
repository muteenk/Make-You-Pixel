import { Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  avatar: string;
  verifyCode: string;
  verifyCodeExpires: Date;
  isVerified: boolean;
  role: string;
}
