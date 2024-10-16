import { Document } from 'mongoose';

export interface IUser extends Document {
  username: string | undefined | null;
  email: string | undefined | null;
  avatar: string | null;
  verifyCode: string | null;
  verifyCodeExpires: Date | null;
  isVerified: boolean | null;
  role: string;
}
