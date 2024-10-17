import { ObjectId} from 'mongoose';
import 'next-auth'
import { StaticImageData } from 'next/image';


declare module 'next-auth' {
  interface User {
    _id?: string | ObjectId | undefined | null;
    name?: string | undefined | null;
    email?: string | undefined | null;
    image?: string | null;
    provider?: string | null;
    isVerified?: boolean | null;
    role?: string | null;
  }

  interface Session {
    user: {
      id?: string | ObjectId | undefined | null;
      name?: string | undefined | null;
      email?: string | undefined | null;
      image?: string | null;
      role?: string | null;
    }
  }

  interface JWT {
    id?: string | ObjectId | undefined | null;
    name?: string | undefined | null;
    email?: string | undefined | null;
    image?: string | null;
    role?: string | null;
  }
}