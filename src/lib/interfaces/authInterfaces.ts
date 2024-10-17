import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string | undefined | null;
  email: string | undefined | null;
  image: string | undefined | null;
  verifyCode: string | null;
  verifyCodeExpires: Date | null;
  isVerified: boolean | null;
  provider?: string | null;
  role: string;
}
